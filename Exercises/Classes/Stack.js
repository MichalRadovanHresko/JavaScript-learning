const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);
    }
    peek() { // Shows me what is on the top of the stack
        const items = _items.get(this);
        if (items.length === 0);
        return items[items.length - 1];
    };

    push(nmb) {
        _items.get(this).push(nmb);
    };

    pop() {
        const items = _items.get(this);
        if (items.length === 0)
            throw new Error('Stack is empty')
        return items.pop();
    };

    get count() {
        return _items.get(this).length;
    }
}