window.addEventListener('DOMContentLoaded', () => {
    
    // modal

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scarollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scarollWidth;
    }

    let scrollWidth = calcScroll();

    function modal(modal, modalActiveClass, triggers, modalClose) {
        const triggers_ = document.querySelectorAll(triggers),
            modal_ = document.querySelector(modal),
            modalClose_ = document.querySelector(modalClose);

        if (triggers_.length > 0) {
            triggers_.forEach(item => {
                item.addEventListener('click', () => {
                    modal_.classList.add(modalActiveClass);
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scrollWidth}px`;
                });
            });

            modalClose_.addEventListener('click', () => {
                modal_.classList.remove(modalActiveClass);
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            });

            modal_.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal__container')) {
                    modal_.classList.remove(modalActiveClass);
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';
                }
            });
        }
    }

    modal('.modal-main', 'modal--active', '[data-modal]', '.modal-main__close');


    //faq

    function faq(title, itemActive) {

        const titles = document.querySelectorAll(title);

        titles.forEach((item) => {
            item.addEventListener('click', () => {
                item.parentElement.classList.toggle(itemActive);

            });
        });

    }

    faq('.faq__item__title', 'faq__item--active');

    // tabs

    const tabs = document.querySelectorAll('.chat__tab'),
        tabsContent = document.querySelectorAll('.chat__item'),
        tabsParent = document.querySelector('.chat__tabs');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('fade');
        });

        tabs.forEach(item => {
            item.classList.remove('chat__tab--active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('fade');
        tabs[i].classList.add('chat__tab--active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target.classList.contains('chat__tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // open chat

    const btnFix = document.querySelector('.fix-block'),
          chat = document.querySelector('.chat'),
          chatClose = document.querySelector('.chat__close');

    btnFix.addEventListener('click', () => {
        chat.classList.add('chat--active');
        btnFix.style.display = 'none';
    });

    chatClose.addEventListener('click', () => {
        chat.classList.remove('chat--active');
        btnFix.style.display = 'block';
    })
});