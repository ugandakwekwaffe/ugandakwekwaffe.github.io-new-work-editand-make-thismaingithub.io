
    //Whatsapp
    
         const whatsappHomeIcon = document.getElementById('whatsapp-home-icon');
const whatsappPopup = document.getElementById('whatsapp-popup');
const closePopupButton = document.getElementById('close-popup');
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const typingEffect = document.getElementById('typing-effect');
const emojiPopup = document.getElementById('emoji-popup');
const emojiIcon = document.getElementById('emoji-icon');

// Show the chat pop-up
whatsappHomeIcon.addEventListener('click', () => {
    whatsappPopup.style.display = 'flex';
});

// Close the chat pop-up
closePopupButton.addEventListener('click', () => {
    whatsappPopup.style.display = 'none';
});

// Add message to the chat window and then redirect to WhatsApp API
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        // Display message in the chat window
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'sent');
        userMessage.innerHTML = `
            <div class="message-bubble">${message}</div>
            <span class="blue-tick">✔✔</span>
        `;
        chatMessages.appendChild(userMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the latest message

        // Display automated reply thanking the user
        setTimeout(() => {
            const replyMessage = document.createElement('div');
            replyMessage.classList.add('message', 'received');
            replyMessage.innerHTML = `
                <img src="./gallery/cnx.png" alt="Avatar">
                <div class="message-bubble">Thank you for your valuable feedback. Together, we can make a difference for Busiro East!</div>
            `;
            chatMessages.appendChild(replyMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);

        // Redirect to WhatsApp API
        const phoneNumber = '+15879881614'; // Updated WhatsApp number 
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

        // Clear the input field
        messageInput.value = '';
    } else {
        alert('Please enter a message.');
    }
});

// Emoji popup toggle
emojiIcon.addEventListener('click', () => {
    emojiPopup.style.display = emojiPopup.style.display === 'block' ? 'none' : 'block';
});

// Append emoji to input field
emojiPopup.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        messageInput.value += event.target.textContent;
        emojiPopup.style.display = 'none'; // Close emoji popup after selection
    }
});

// Remove typing effect after animation
setTimeout(() => {
    typingEffect.classList.remove('typing');
}, 3000);
const whatsappIcon = document.querySelector('.whatsapp-home-icon');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Change "200" to the desired scroll height
        whatsappIcon.style.display = 'flex'; // Show the button
        whatsappIcon.style.animation = 'slideInFromRight 0.5s ease forwards'; // Trigger the animation
    } else {
        whatsappIcon.style.display = 'none'; // Hide the button
    }
});

// Initially hide the button
whatsappIcon.style.display = 'none';

 const slides = document.querySelectorAll('.kwekwaffe-slide');
    const titleEl = document.getElementById('kwekwaffe-title');
    const subEl = document.getElementById('kwekwaffe-sub');
    const iconLayer = document.getElementById('kwekwaffe-animated-icons');
    let current = 0;

    function showSlide(index) {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      const slide = slides[index];
      titleEl.textContent = slide.dataset.title;
      subEl.textContent = slide.dataset.sub;

      anime({
        targets: titleEl,
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 1000,
        easing: 'easeOutBack'
      });

      anime({
        targets: subEl,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 500,
        duration: 1000,
        easing: 'easeOutExpo'
      });

      iconLayer.innerHTML = '';
      const icon = document.createElement('img');
      icon.src = `./gallery/object-7.png?text=${index+1}`;
      icon.style.position = 'absolute';
      icon.style.top = `${30 + index * 15}%`;
      icon.style.left = `${20 + index * 25}%`;
      icon.style.width = '40px';
      icon.style.opacity = '0.5';
      iconLayer.appendChild(icon);

      anime({
        targets: icon,
        translateY: [-20, 20],
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        duration: 3000
      });
    }

    showSlide(current);
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 6000);