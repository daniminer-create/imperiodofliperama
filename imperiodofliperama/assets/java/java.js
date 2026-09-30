/* =========================================================
   MENU MOBILE
========================================================= */

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


menuBtn.addEventListener("click", () => {

    menu.classList.toggle("open");

});


/* Fecha o menu ao clicar em algum link */

const menuLinks = document.querySelectorAll("#menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("open");

    });

});


/* =========================================================
   MENU ATIVO CONFORME A SEÇÃO
========================================================= */

const sections = document.querySelectorAll("main section[id]");


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                menuLinks.forEach(link => {

                    link.classList.remove("active");

                });


                const activeLink =
                    document.querySelector(
                        `#menu a[href="#${entry.target.id}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);


sections.forEach(section => {

    observer.observe(section);

});


/* =========================================================
   FORMULÁRIO
========================================================= */

const form =
    document.getElementById("contactForm");


const toast =
    document.getElementById("toast");


form.addEventListener("submit", event => {

    event.preventDefault();

    if (!form.checkValidity()) {

        form.reportValidity();

        return;

    }

    const name = form.elements.name.value.trim();

    const email = form.elements.email.value.trim();

    const phone = form.elements.phone.value.trim();

    const message = form.elements.message.value.trim();

    const subject = encodeURIComponent(`Contato pelo site - ${name}`);

    const body = encodeURIComponent(
        `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`
    );

    window.location.href =
        `mailto:imperiodofliperama@gmail.com?subject=${subject}&body=${body}`;

    toast.textContent =
        "Seu aplicativo de e-mail foi aberto para enviar a mensagem.";


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 4000);

});