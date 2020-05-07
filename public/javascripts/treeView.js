(() => {
    var treeData = {
        name: "Projects",
        children: [
            {
                name: "Tezaur folcloric romanesc",
                children: [{name:"Project that has as scope open-sourcing a large set of old Romanian music." +
                "\nScope of it is to open the repository to the society and save all those gems" +
                "\nIt is of course, publicly available on: https://github.com/cle96/tezaur-folcloric-romanesc"}]
            },
            {
                name: "This very own website",
                children: [{
                    name:
                        "\nIt became as an idea and curiosity to play with Terraform and design a free, performant and scalable solution for free hosting." +
                        "\nMore can be seen on: "
                }]
            },
            {
                name: "Game of lifish",
                children: [
                    {
                        name: "After hearing about the sad death of the inventor of Game of Life I decided to play a tribute to him." +
                            "\n In the process of finalising the Game of Life I stumbled upon some rules, linear ones, that generate beautiful pattern." +
                            "\n I decided to version that and keep it as part of my website." +
                            "Code is obviously on open: "
                    }
                ]
            }]
    };

// define the tree-item component
    Vue.component("tree-item", {
        template: "#item-template",
        props: {
            item: Object
        },
        data: function () {
            return {
                isOpen: false
            };
        },
        computed: {
            isFolder: function () {
                return this.item.children && this.item.children.length;
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.isOpen = !this.isOpen;
                }
            },
            makeFolder: function () {
                if (!this.isFolder) {
                    this.$emit("make-folder", this.item);
                    this.isOpen = true;
                }
            }
        }
    });

// boot up the demo
    var demo = new Vue({
        el: "#projects",
        data: {
            treeData: treeData
        },
        methods: {
            makeFolder: function (item) {
                Vue.set(item, "children", []);
                this.addItem(item);
            }
        }
    });
})();