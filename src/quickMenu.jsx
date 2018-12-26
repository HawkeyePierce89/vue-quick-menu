export default {
    render() {
        return (
            <div class={'quick-menu'} ref={'quickMenu'} style={this.quickMenuStyle}>
                <div class={'quick-menu__backlayer'} style={this.backlayer} />

                {this.items.map((item, index) => (<div class={'sub-menu'} style={this.getSubMenu(index)} ref={'icon'} refInFor={true}>
                    {item}
                </div>))}

                <div class={'menu'} style={this.menuStyle}>
                    <div class={'core-menu'} onClick={this.toggleMenu}>
                        <div class={'bar'}></div>
                    </div>
                </div>
            </div>
        );
    },
    name: 'quickMenu',
    _scopeId: 'data-quick-menu',
    props: {
        position: {
            type: String,
            default: 'top-left',
        },
        backgroundColor: {
            type: String,
            default: '#20babb',
        },
    },
    computed: {
        menuCount() {
            return this.items.length;
        },
        backlayer() {
            return {
                borderBottom: `1px solid ${this.backgroundColor}`,
            };
        },
        quickMenuStyle() {
            const topPosition = { top: '30px' };
            const bottomPosition = { bottom: '30px' };
            const leftPosition = { left: '30px' };
            const rightPosition = { right: '30px' };
            const style = this.isTop ? topPosition : bottomPosition;

            Object.assign(style, this.isLeft ? leftPosition : rightPosition);
            Object.assign(style, { transform: this.isLeft ? 'rotate(-180deg)' : 'rotate(180deg)' });

            return style;
        },
        isTop() {
            return !!~this.position.toLowerCase().indexOf('top');
        },
        isLeft() {
            return !!~this.position.toLowerCase().indexOf('left');
        },
        menuStyle() {
            return {
                backgroundColor: this.backgroundColor,
            };
        },
    },
    data() {
        return {
            items: this.$slots.default.filter(slot => slot.text !== ' '),
            menuSize: 60,
            subMenu4: [[['0', '-160'], ['-80', '-138.6'], ['-138.6', '-80'], ['-160', '0']], [['0', '-160'], ['80', '-138.6'], ['138.6', '-80'], ['160', '0']], [['0', '160'], ['138.6', '80'], ['80', '138.6'], ['160', '0']], [['-160', '0'], ['-138.6', '80'], ['-80', '138.6'], ['0', '160']]],
            subMenu3: [[['-160', '0'], ['-113', '-113'], ['0', '-160']], [['0', '-160'], ['113', '-113'], ['160', '0']], [['0', '160'], ['113', '113'], ['160', '0']], [['-160', '0'], ['-113', '113'], ['0', '160']]],
            subMenu2: [[['-160', '0'], ['0', '-160']], [['0', '-160'], ['160', '0']], [['0', '160'], ['160', '0']], [['-160', '0'], ['0', '160']]],
        };
    },
    methods: {
        getSubMenu(n) {
            let menuPosition = this.menuCount === 4 ? this.subMenu4 : this.menuCount === 3 ? this.subMenu3 : this.subMenu2;
            menuPosition = this.isTop && this.isLeft ? menuPosition[2] : this.isTop && !this.isLeft ? menuPosition[1] : !this.isTop && this.isLeft ? menuPosition[3] : menuPosition[0];
            return { top: `${menuPosition[n][0]}px`, left: `${menuPosition[n][1]}px` };
        },
        toggleMenu(e) {
            const menuEl = this.$refs.quickMenu;
            const menuIconEl = this.$refs.icon;

            if (!~menuEl.className.indexOf(' active')) {
                menuEl.className += ' active';
                menuIconEl.forEach((element, index) => {
                    element.className += ' quick-menu-animate';
                });
            } else {
                menuEl.className = menuEl.className.replace(' active', '');
                menuIconEl.forEach((element, index) => {
                    element.className = element.className.replace(' quick-menu-animate', '');
                });
            }
        },
        processCallback(key) {
            this.$emit('process', key);
        },
    },
};
