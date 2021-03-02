<script>
export default {
  name: 'Menu',
  props: {
    data: {
      type: Array,
      required: true,
    },
    defaultActive: {
      type: String,
    },
  },
  methods: {
    getElMenuItemProps(obj) {
      const props = {};
      if (obj.index) {
        props.index = obj.index;
      }
      if (obj.route) {
        props.route = obj.route;
      }
      if (obj.disabled) {
        props.disabled = obj.disabled;
      }
      return props;
    },
    createElMenuItem(h, opt) {
      const props = this.getElMenuItemProps(opt);
      return h('el-menu-item', {
        props,
      }, [opt.name]);
    },
    createElSubmenu(h, obj) {
      const props = this.getElMenuItemProps(obj);
      const rootElSubmenuChildren = obj.children.map((item) => {
        if (Object.prototype.toString.call(item) === '[object Array]') {
          return h('el-menu-item-group', {}, [
            h('template', {
              slot: 'title',
            }, [item[0].name]),
            ...this.createChildrenList(h, item.slice(1)),
          ]);
        } if (item.children && item.children.length) {
          return this.createElSubmenu(h, item);
        }
        return this.createElMenuItem(h, item);
      });

      const rootElSubmenu = h('el-submenu', {
        props,
      }, [
        h('template', {
          slot: 'title',
        }, [obj.name]),
        ...rootElSubmenuChildren,
      ]);

      return rootElSubmenu;
    },
    createChildrenList(h, list) {
      const elMenuChildrens = [];
      for (let i = 0; i < list.length; i += 1) {
        let node;
        if (Object.prototype.toString.call(list[i]) === '[object Array]') {
          node = h('el-menu-item-group', {}, [
            h('template', {
              slot: 'title',
            }, [list[i][0].name]),
            ...this.createChildrenList(h, list[i].slice(1)),
          ]);
        } else if (list[i].children && list[i].children.length) {
          node = this.createElSubmenu(h, list[i]);
        } else {
          node = this.createElMenuItem(h, list[i]);
        }
        elMenuChildrens.push(node);
      }
      return elMenuChildrens;
    },
  },
  render(createElement) {
    const nodes = this.createChildrenList(createElement, this.data);
    const elMenu = createElement('el-menu', {
      props: {
        'default-active': this.defaultActive,
      },
    }, nodes);
    return elMenu;
  },
};
</script>
