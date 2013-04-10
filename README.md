## Modalresizer

I wrote this plug in to solve the issue of bootstrap-ish modals extending outside of the viewport if they have too much content inside of them.

It gets triggered when a modal on the page is opened (firing a window event called 'modal-opened') and adjusts the height of the modal to fit appropriately inside of the window.  It does not affect modals with a `.no-resize` class applied to them or modals that naturally fit inside the window.  It applies a maximum height to the modal and allows scrolling of the inner content.