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
    mode: {
      tyep: String,
      default: 'vertical',
    },
    collapse: {
      tyep: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    textColor: {
      type: String,
      default: '#303133',
    },
    activeTextColor: {
      type: String,
      default: '#409EFF',
    },
    defaultOpeneds: {
      type: Array,
      default() {
        return [];
      },
    },
    uniqueOpened: {
      type: Boolean,
      default: false,
    },
    menuTrigger: {
      type: String,
      default: 'hover',
    },
    router: {
      type: Boolean,
      default: false,
    },
    collapseTransition: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      name: `menu${Date.now()}`,
    };
  },
  methods: {
    open(index) {
      this.$refs[this.name].open(index);
    },
    close(index) {
      this.$refs[this.name].close(index);
    },
    onSelect(index, indexPath) {
      this.$emit('select', index, indexPath);
    },
    onOpen(index, indexPath) {
      this.$emit('open', index, indexPath);
    },
    onClose(index, indexPath) {
      this.$emit('close', index, indexPath);
    },
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
      if (obj.popperClass) {
        props['popper-class'] = obj.popperClass;
      }
      if (obj.showTimeout) {
        props['show-timeout'] = obj.showTimeout;
      }
      if (obj.hideTimeout) {
        props['hide-timeout'] = obj.hideTimeout;
      }
      if (obj.popperAppendToBody) {
        props['popper-append-to-body'] = obj.popperAppendToBody;
      }
      if (obj.icon) {
        props.icon = obj.icon;
      }
      if (obj.name) {
        props.name = obj.name;
      }
      return props;
    },
    createElMenuItem(h, opt) {
      const props = this.getElMenuItemProps(opt);
      let node = [props.name];
      if (props.icon) {
        node = [
          h('i', {
            attrs: {
              class: props.icon,
            },
          }),
          h('span', {
            slot: 'title',
          }, [props.name]),
        ];
      }
      return h('el-menu-item', {
        props,
      }, [...node]);
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

      let node = [props.name];

      if (props.icon) {
        node = [
          h('i', {
            attrs: {
              class: props.icon,
            },
          }),
          h('span', {
            slot: 'title',
          }, [props.name]),
        ];
      }

      const rootElSubmenu = h('el-submenu', {
        props,
      }, [
        h('template', {
          slot: 'title',
        }, [...node]),
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
      on: {
        select: this.onSelect,
        open: this.onOpen,
        close: this.onClose,
      },
      props: {
        'default-active': this.defaultActive,
        mode: this.mode,
        collapse: this.collapse,
        'background-color': this.backgroundColor,
        'text-color': this.textColor,
        'active-text-color': this.activeTextColor,
        'default-openeds': this.defaultOpeneds,
        'unique-opened': this.uniqueOpened,
        'menu-trigger': this.menuTrigger,
        router: this.router,
        'collapse-transition': this.collapseTransition,
      },
      ref: this.name,
    }, nodes);

    return elMenu;
  },
};
</script>
