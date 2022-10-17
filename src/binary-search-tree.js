const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    root() {
        if (!this.tree) {
            return null;
        }
        return this.tree;
    }
    add(data) {
        let newTree = new Node(data);
        if (!this.tree) {
            this.tree = newTree;
        } else {
            let t = this.tree;

            function funcAdd() {
                if (newTree.data < t.data) {
                    if (!t.left) {
                        t.left = newTree;
                    } else {
                        t = t.left;
                        funcAdd();
                    }
                } else if (newTree.data > t.data) {
                    if (!t.right) {
                        t.right = newTree;
                    } else {
                        t = t.right;
                        funcAdd();
                    }
                }
            }
            funcAdd();
        }
    }

    has(data) {
        if (!this.tree) {
            return false;
        } else {
            let t = this.tree;

            function funcHas() {
                if (t.data === data) {
                    return true;
                } else if (t.data > data) {
                    t = t.left;
                    if (!t) {
                        return false;
                    } else {
                        return funcHas();
                    }
                } else {
                    t = t.right;
                    if (!t) {
                        return false;
                    } else {
                        return funcHas()
                    }
                }
            }
            return funcHas();
        }
    }

    find(data) {
        if (!this.tree) {
            return false;
        } else {
            let t = this.tree;

            function funcFind() {
                if (t.data === data) {
                    return t;
                } else if (t.data > data) {
                    t = t.left;
                    if (!t) {
                        return null;
                    } else {
                        return funcFind();
                    }

                } else {
                    t = t.right;
                    if (!t) {
                        return null;
                    } else {
                        return funcFind()
                    }
                }
            }
            return funcFind();
        }
    }

    remove(data) {
        this.tree = funcRemove(this.tree, data)

        function funcRemove(t, data) {
            if (!t) {
                return null;
            } else {
                if (data < t.data) {
                    t.left = funcRemove(t.left, data);
                    return t;
                } else if (data > t.data) {
                    t.right = funcRemove(t.right, data);
                    return t;
                } else {
                    if (!t.left && !t.right) {
                        return null;
                    } else if (!t.left) {
                        t = t.right;
                        return t;
                    } else if (!t.right) {
                        t = t.left;
                        return t;
                    }

                    let r = t.right
                    while (r.left) {
                        r = r.left;
                    }
                    t.data = r.data;
                    t.right = funcRemove(t.right, r.data);
                    return t;
                }
            }
        }
    }

    min() {
        if (!this.tree) {
            return null;
        } else {
            let t = this.tree;
            while (t.left) {
                t = t.left;
            }
            return t.data;
        }
    }

    max() {
        if (!this.tree) {
            return null;
        } else {
            let t = this.tree;
            while (t.right) {
                t = t.right;
            }
            return t.data;
        }
    }
}

module.exports = {
    BinarySearchTree
};