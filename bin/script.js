// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const department = document.getElementById('department').value;
    
    const messageDiv = document.getElementById('form-message');
    
    // Validación simple
    if (name && email && message && department) {
        messageDiv.innerHTML = `<p style="color: green;">¡Gracias ${name}! Tu mensaje ha sido enviado al departamento de ${department}. Te contactaremos pronto.</p>`;
        messageDiv.style.display = 'block';
        
        // Resetear formulario
        document.getElementById('contact-form').reset();
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    } else {
        messageDiv.innerHTML = '<p style="color: red;">Por favor, completa todos los campos obligatorios (*).</p>';
        messageDiv.style.display = 'block';
    }
});

// WhatsApp con múltiples números
const whatsappToggle = document.getElementById('whatsapp-toggle');
const whatsappOptions = document.getElementById('whatsapp-options');
const closeWhatsapp = document.querySelector('.close-whatsapp');

// Mostrar/ocultar opciones de WhatsApp
if (whatsappToggle) {
    whatsappToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        whatsappOptions.classList.toggle('show');
    });
}

// Cerrar al hacer clic en X
if (closeWhatsapp) {
    closeWhatsapp.addEventListener('click', function(e) {
        e.stopPropagation();
        whatsappOptions.classList.remove('show');
    });
}

// Cerrar al hacer clic fuera
document.addEventListener('click', function(e) {
    if (whatsappOptions && whatsappToggle) {
        if (!whatsappToggle.contains(e.target) && !whatsappOptions.contains(e.target)) {
            whatsappOptions.classList.remove('show');
        }
    }
});

// Evitar que clics dentro del menú cierren
if (whatsappOptions) {
    whatsappOptions.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Mensaje de consola (opcional)
console.log('Página de Falabella Lima Centro cargada correctamente.');