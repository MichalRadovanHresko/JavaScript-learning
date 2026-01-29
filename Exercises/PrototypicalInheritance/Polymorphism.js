function extend(Child, Parent) { 
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}

function HtmlElement() {
    this.click = function() {
        console.log('Clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('Focued');
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function() {
        const optionsHtml = this.items.map(item => `<option>${item}</option>`).join('');
        return `<select>${optionsHtml}</select>`;
    };
}

function HtmlImageElement(src) {
    this.src = src;
    this.render = function() {
        return `<img src=${this.src}/>`;
};
}
extend(HtmlImageElement, HtmlElement)
extend(HtmlSelectElement, HtmlElement)