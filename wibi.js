function createClick2ChatWidget(n) {
    var e, t, o, a, i, c, p, l, s, r, d, h, u, g, x, m = "",
        f = "",
        _ = "",
        y = "",
        b = "",
        w = "",
        v = [];
    !async function() {
        var P = await fetch(`https://us-central1-hubspot-api-developer.cloudfunctions.net/wibi-click-api?id=${n}&c=0`);
        var B = await P.json();
        m = B.name, f = B.designation, e = B.pnumber, t = B.wnumber, o = B.message, _ = B.messenger_url, y = B.color_code, b = B.profile_imgUrl, w = B.email, a = B.subject, i = B.body, c = B.whatsapp_message, p = B.telegram_num, l = B.viber_num, s = B.skype_nameemail, r = B.pnumber_sms, d = B.sms_body, h = B.label, g = B.position, v = B.custom_buttons, x = B.line, u = B.close_label, void 0 === h && (h = "Contact Us"), void 0 !== g && "" !== g || (g = "right");
        var k = document.createElement("div");

        var htmlButtons = {
            "messenger_show": `<a target="_blank" href="${_}" class="chatPopup__messengerNow"  id="chatPopup__messengerNow">                <div class="chatPopup__messengerIcon"><svg aria-hidden="true" focusable="false" data-prefix="fab"                        data-icon="facebook-messenger" class="svg-inline--fa fa-facebook-messenger fa-w-16" role="img"                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">                        <path fill="currentColor"                            d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z">                        </path>                    </svg></div>                <div class="chatPopup__phoneText">Messenger</div>            </a>`,

            "line_show": `<a target="_blank" href="https://line.me/R/ti/p/@${x}" class="chatPopup__line"  id="chatPopup__line">                <div class="chatPopup__messengerIcon"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="line" class="svg-inline--fa fa-line fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"></path></svg></div>                <div class="chatPopup__phoneText">Line</div>            </a>`,

            "viber_show": `<a target="_blank" href="viber://chat?number=${l}" class="chatPopup__viber"  id="chatPopup__viber">                <div class="chatPopup__messengerIcon"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="viber" class="svg-inline--fa fa-viber fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"></path></svg></div>                <div class="chatPopup__phoneText">Viber</div>            </a>`,

            "phone_show": `<a target="_blank" href="tel:${e}" class="chatPopup__callNow" id="chatPopup__callNow">                <div class="chatPopup__phoneIcon"><svg viewBox="0 0 578.106 578.106">                        <path                            d="M577.83 456.128c1.225 9.385-1.635 17.545-8.568 24.48l-81.396 80.781c-3.672 4.08-8.465 7.551-14.381 10.404-5.916 2.857-11.729 4.693-17.439 5.508-.408 0-1.635.105-3.676.309-2.037.203-4.689.307-7.953.307-7.754 0-20.301-1.326-37.641-3.979s-38.555-9.182-63.645-19.584c-25.096-10.404-53.553-26.012-85.376-46.818-31.823-20.805-65.688-49.367-101.592-85.68-28.56-28.152-52.224-55.08-70.992-80.783-18.768-25.705-33.864-49.471-45.288-71.299-11.425-21.828-19.993-41.616-25.705-59.364S4.59 177.362 2.55 164.51-.306 141.56.102 134.216c.408-7.344.612-11.424.612-12.24.816-5.712 2.652-11.526 5.508-17.442s6.324-10.71 10.404-14.382L98.022 8.756c5.712-5.712 12.24-8.568 19.584-8.568 5.304 0 9.996 1.53 14.076 4.59s7.548 6.834 10.404 11.322l65.484 124.236c3.672 6.528 4.692 13.668 3.06 21.42-1.632 7.752-5.1 14.28-10.404 19.584l-29.988 29.988c-.816.816-1.53 2.142-2.142 3.978s-.918 3.366-.918 4.59c1.632 8.568 5.304 18.36 11.016 29.376 4.896 9.792 12.444 21.726 22.644 35.802s24.684 30.293 43.452 48.653c18.36 18.77 34.68 33.354 48.96 43.76 14.277 10.4 26.215 18.053 35.803 22.949 9.588 4.896 16.932 7.854 22.031 8.871l7.648 1.531c.816 0 2.145-.307 3.979-.918 1.836-.613 3.162-1.326 3.979-2.143l34.883-35.496c7.348-6.527 15.912-9.791 25.705-9.791 6.938 0 12.443 1.223 16.523 3.672h.611l118.115 69.768c8.571 5.308 13.67 12.038 15.303 20.198z">                        </path>                    </svg></div>                <div class="chatPopup__phoneText">${e}</div>            </a>         `,

            "telegram_show": `<a target="_blank" href="https://t.me/${p}" class="chatPopup__telegram"  id="chatPopup__telegram">                <div class="chatPopup__messengerIcon"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" class="svg-inline--fa fa-telegram-plane fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg></div>                <div class="chatPopup__phoneText">Telegram</div>            </a>`,

            "text_show": `<a target="_blank" href="sms://${r};?&body=${d}" class="chatPopup__messageNow" id="chatPopup__messageNow">                <div class="chatPopup__whatsappIcon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" class="svg-inline--fa fa-comment fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg></div>                <div class="chatPopup__phoneText">Send a message</div>            </a>`,

            "email_show": `<a target="_blank" href="mailto:${w}?subject=${encodeURIComponent(a)}&body=${encodeURIComponent(i)}" class="chatPopup__mailNow"  id="chatPopup__mailNow">                <div class="chatPopup__mailIcon"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg></div>                <div class="chatPopup__phoneText">Email Us</div>            </a>`,

            "whatsapp_show": `<a target="_blank" href="https://api.whatsapp.com/send?phone=${t}&text=${encodeURIComponent(c)}" class="chatPopup__whatsappNow" id="chatPopup__whatsappNow">                <div class="chatPopup__whatsappIcon"><svg aria-hidden="true" focusable="false" data-prefix="fab"                        data-icon="whatsapp" class="svg-inline--fa fa-whatsapp fa-w-14" role="img"                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">                        <path fill="currentColor"                            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">                        </path>                    </svg></div>                <div class="chatPopup__phoneText">Whatsapp</div>            </a>`,

            "skype_show": `<a target="_blank" href="skype:${s}?chat" class="chatPopup__skype"  id="chatPopup__skype">                <div class="chatPopup__messengerIcon"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="skype" class="svg-inline--fa fa-skype fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path></svg></div>                <div class="chatPopup__phoneText">Skype</div>            </a>`,
        }

        k.className = "click2Chat", k.innerHTML = `  <div class="chat-popup" id="myForm"  style="display: none;">        <div class="div-container" id="divContainer">                                    ${ B.phone_show ? htmlButtons.phone_show : '' }           \x3c!-- Message on Phone --\x3e\n            ${ B.text_show ? htmlButtons.text_show : '' }                  \x3c!-- Message on whatsapp --\x3e\n              ${ B.whatsapp_show ? htmlButtons.whatsapp_show : '' }                \x3c!-- Message on Messenger --\x3e\n            ${ B.messenger_show ? htmlButtons.messenger_show : '' }               \x3c!-- Message on Telegram --\x3e\n            ${ B.telegram_show ? htmlButtons.telegram_show : '' }               \x3c!-- Message on Viber --\x3e\n            ${ B.viber_show ? htmlButtons.viber_show : '' }                     \x3c!-- Message on Skype --\x3e\n            ${ B.skype_show ? htmlButtons.skype_show : '' }                    \x3c!-- Message on Line --\x3e\n            ${ B.line_show ? htmlButtons.line_show : '' }                     \x3c!-- Message on Gmail --\x3e\n            ${ B.email_show ? htmlButtons.email_show : '' }        </div>       </div>     <button type="button" class="openButton" id="openButton" style="background-color: ${y};">                     <svg id="openButton__phoneIcon" viewBox="0 0 578.106 578.106">            <path                d="M577.83 456.128c1.225 9.385-1.635 17.545-8.568 24.48l-81.396 80.781c-3.672 4.08-8.465 7.551-14.381 10.404-5.916 2.857-11.729 4.693-17.439 5.508-.408 0-1.635.105-3.676.309-2.037.203-4.689.307-7.953.307-7.754 0-20.301-1.326-37.641-3.979s-38.555-9.182-63.645-19.584c-25.096-10.404-53.553-26.012-85.376-46.818-31.823-20.805-65.688-49.367-101.592-85.68-28.56-28.152-52.224-55.08-70.992-80.783-18.768-25.705-33.864-49.471-45.288-71.299-11.425-21.828-19.993-41.616-25.705-59.364S4.59 177.362 2.55 164.51-.306 141.56.102 134.216c.408-7.344.612-11.424.612-12.24.816-5.712 2.652-11.526 5.508-17.442s6.324-10.71 10.404-14.382L98.022 8.756c5.712-5.712 12.24-8.568 19.584-8.568 5.304 0 9.996 1.53 14.076 4.59s7.548 6.834 10.404 11.322l65.484 124.236c3.672 6.528 4.692 13.668 3.06 21.42-1.632 7.752-5.1 14.28-10.404 19.584l-29.988 29.988c-.816.816-1.53 2.142-2.142 3.978s-.918 3.366-.918 4.59c1.632 8.568 5.304 18.36 11.016 29.376 4.896 9.792 12.444 21.726 22.644 35.802s24.684 30.293 43.452 48.653c18.36 18.77 34.68 33.354 48.96 43.76 14.277 10.4 26.215 18.053 35.803 22.949 9.588 4.896 16.932 7.854 22.031 8.871l7.648 1.531c.816 0 2.145-.307 3.979-.918 1.836-.613 3.162-1.326 3.979-2.143l34.883-35.496c7.348-6.527 15.912-9.791 25.705-9.791 6.938 0 12.443 1.223 16.523 3.672h.611l118.115 69.768c8.571 5.308 13.67 12.038 15.303 20.198z">            </path>        </svg>              <svg id="openButton__closeIcon" style=" display: none; " viewBox="0 0 16 16" focusable="false"            class="jsx-1895484302 eactc-button-closeIcon eactc-button-show">            <path                d="M9.414,8l6.112-6.112c0.396-0.396,0.401-1.032,0.009-1.423c-0.39-0.39-1.027-0.387-1.423,0.009L8,6.585 L1.888,0.473C1.492,0.077,0.854,0.074,0.465,0.464C0.073,0.856,0.078,1.492,0.474,1.888L6.586,8l-6.112,6.112 c-0.396,0.396-0.401,1.033-0.009,1.423c0.39,0.391,1.027,0.387,1.423-0.008L8,9.415l6.112,6.113 c0.396,0.394,1.033,0.399,1.423,0.008c0.39-0.39,0.387-1.027-0.009-1.423L9.414,8z"                class="jsx-1895484302"></path>        </svg>        <span id="openButton__label">${h}</span>                  </button>            `, document.querySelector("body").appendChild(k);

        var I = document.createElement("style");
        I.innerHTML = `@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);#myForm{display:none;font-family:Poppins,sans-serif}.openButton{display:flex;justify-content:center;align-items:center;color:#fff;border:none;cursor:pointer;position:fixed;bottom:23px;${g}: 28px; height: 45px; padding: 0px 24px; border-radius: 40px; fill: rgb(255, 255, 255); box-shadow: rgba(17, 12, 46, 0.15) 0px 20px 16px 0px; z-index: 9999;}#openButton__label{margin-left:8px;font-size:16px;font-family:Poppins,sans-serif;margin-bottom:0}.form-popup{display:none;position:fixed;bottom:0;right:15px;border:3px solid #f1f1f1;z-index:9}.div-container{box-sizing:border-box;text-align:center;position:fixed;bottom:67px;${g}: 28px; max-width: 300px; background-color: transparent; box-shadow: none; border-radius: 8px; padding: 16px 24px; z-index: 1000; display: flex; flex-direction: column; justify-content: center; align-items: center; min-width: 250px;}.chatPopup__name{font-size:13px;margin-bottom:0}.chatPopup__designation{font-size:12px;opacity:.8;margin:0}.chatPopup__message{font-size:14px;opacity:.9;margin-top:8px;margin-bottom:0!important}.chatPopup__callNow{background-color:#3ba934;color:#fff;display:flex;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;justify-content:center;margin-top:6px}.chatPopup__line{background-color:#53c645;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;margin-top:6px}.chatPopup__phoneIcon{height:15px;width:15px;display:flex;justify-content:center;align-items:center}.chatPopup__phoneText{margin-left:8px;font-size:16px;font-weight:500}.chatPopup__messageNow{background-color:#ffb714;color:#fff;display:flex;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;justify-content:center;align-items:center;margin-top:6px}.chatPopup__whatsappNow{background-color:#53c645;color:#fff;display:flex;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;justify-content:center;align-items:center;margin-top:6px}.chatPopup__whatsappIcon{height:17px;width:17px;display:flex;justify-content:center;align-items:center}.chatPopup__messengerNow{background-color:#006aff;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;margin-top:6px}.chatPopup__skype{background-color:#02aff0;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;margin-top:6px}.chatPopup__viber{background-color:#754da0;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;margin-top:6px}.chatPopup__telegram{background-color:#15a4ee;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;margin-top:6px}.chatPopup__messengerIcon{height:17px;width:17px;display:flex;justify-content:center;align-items:center}.chatPopup__mailNow{background-color:#ea4335;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;margin-top:6px}.chatPopup__mailIcon{height:17px;width:17px;display:flex;justify-content:center;align-items:center}#openButton__phoneIcon{height:15px;width:15px;display:flex;justify-content:center;align-items:center}#openButton__closeIcon{height:15px;width:15px}.chatPopup__poweredBy{font-size:11px;margin-top:24px;margin-bottom:8px;text-decoration:none;color:gray}#customButton{background-color:rgba(60,169,52,.068);color:#3ba934;display:flex;border-radius:24px;padding:8px 16px;fill:#3ba934;text-decoration:none;justify-content:center;margin-top:6px;width:100%}#customButton:hover{background-color:#3ba934;color:#fff;display:flex;border-radius:24px;padding:8px 16px;fill:#fff;text-decoration:none;justify-content:center;margin-top:6px}.code__wrapperTextArea{background-color:#182439;border:none;color:#fff;resize:none;overflow:hidden;background-color:#20314e;padding:8px 16px;border-radius:8px;border:1px solid #304c7c}.click2Chat div#divContainer>a{width: 94%; -webkit-box-shadow: 0 5px 10px 2px rgba(88,103,221,.19)!important; box-shadow: 0 5px 10px 2px rgba(88,103,221,.3)!important; padding: 11px 16px; font-size: 13px; line-height: 16px; fill: #fff; text-decoration: none; margin-top: 9px;}.click2Chat div#divContainer>a:hover { color: #fff; opacity: 0.8; }`, document.head.appendChild(I);
        try {
            v.map((n, e) => {
                var t = document.createElement("a");
                t.href = n.url, n.new_tab && (t.target = "_blank");
                var o = "";
                n.logo_code && (o = `<i class="fa customButtonIcon">&#x${n.logo_code};</i>`), t.id = `customButton${e}`, t.innerHTML = `              <div class="chatPopup__phoneText">${o}${n.label}</div>`;
                var a = document.createElement("style");
                a.innerHTML = `.customButtonIcon{            margin-right: 6px;          }           #customButton${e} {              background-color: #${n.colorCode.replace("#","")}0D;              color: #${n.colorCode};              display: flex;              border-radius: 24px;              padding: 8px 16px;              fill: #${n.colorCode.replace("#","")};              text-decoration: none;              justify-content: center;              margin-top: 16px;              width: 100%;            }                        #customButton${e}:hover {              background-color: #${n.colorCode.replace("#","")};              color: white;              display: flex;              border-radius: 24px;              padding: 8px 16px;              fill: white;              text-decoration: none;              justify-content: center;              margin-top: 16px;            }`, document.head.appendChild(a), document.getElementById("divContainer").appendChild(t)
            })
        } catch (n) {}

        async function C() { "none" == document.getElementById("myForm").style.display ? (document.getElementById("myForm").style.display = "block", document.getElementById("openButton__closeIcon").style.display = "block", document.getElementById("openButton__phoneIcon").style.display = "none", document.getElementById("openButton__label").innerText = `${u}`) : (document.getElementById("myForm").style.display = "none", document.getElementById("openButton__closeIcon").style.display = "none", document.getElementById("openButton__phoneIcon").style.display = "block", document.getElementById("openButton__label").innerText = `${h}`); var Q = await fetch(`https://us-central1-hubspot-api-developer.cloudfunctions.net/wibi-click-api?id=${n}&c=1`); var Y = await Q.json(); }

        async function F(e) {
            var target = e.target || e.srcElement,
                text = target.getAttribute("class") || target.innerText;
            if (target.tagName != "A") {
                text = target.closest("a").getAttribute("class")
            }
            var Q = await fetch(`https://us-central1-hubspot-api-developer.cloudfunctions.net/wibi-click-api?id=${n}&c=3&ic=${text}`);
            var Y = await Q.json();
        }

        v && v.length, window.location.href.search("#OpenClick2Contact") >= 0 && C(), document.getElementById("openButton").onclick = function() { C() }, document.querySelectorAll('.click2Chat div#divContainer a').forEach(button => button.onclick = function(e) { F(e) })
    }()
}