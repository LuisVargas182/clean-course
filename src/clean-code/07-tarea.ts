(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class Attributes{
        constructor(
            public value: string,
            public placeholder: string,

        ) {}
    }

    class Events  {
        constructor(  ) {
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement
    class InputElement {
        public htmlElement: HtmlElement;
        public attributes: Attributes;
        public events: Events;
        constructor(value: string, Placeholder: string,id :string){
            this.htmlElement = new HtmlElement(id, 'input');
            this.attributes = new Attributes(value, Placeholder);
            this.events = new Events();
        }


    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()