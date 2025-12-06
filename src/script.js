// ===========================================
// 1. MENÚ HAMBURGUESA
// ===========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en enlace
document.querySelectorAll('.nav-menu a').forEach(n => {
    n.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===========================================
// 2. FORMULARIO DE CONTACTO
// ===========================================

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const subjectText = document.getElementById('subject').options[document.getElementById('subject').selectedIndex].text;
        const department = document.getElementById('department').value.trim();
        const municipality = document.getElementById('municipality').value.trim();
        const message = document.getElementById('message').value.trim();
        
        const messageDiv = document.getElementById('form-message');
        
        // Validar
        const errors = [];
        
        if (!name) errors.push("Nombre completo");
        if (!email || !isValidEmail(email)) errors.push("Email válido");
        if (!phone) errors.push("Teléfono");
        if (!subject) errors.push("Asunto");
        if (!department) errors.push("Departamento");
        if (!municipality) errors.push("Municipio/Ciudad");
        if (!message) errors.push("Mensaje");
        
        if (errors.length === 0) {
            // ÉXITO
            let responseMessage = '';
            
            switch(subject) {
                case 'ventas':
                    responseMessage = `¡Perfecto ${name}! Tu consulta de ventas ha sido enviada.`;
                    break;
                case 'soporte':
                    responseMessage = `¡Gracias ${name}! Tu solicitud de soporte técnico ha sido registrada.`;
                    break;
                case 'reclamos':
                    responseMessage = `¡Entendido ${name}! Hemos registrado tu reclamo.`;
                    break;
                default:
                    responseMessage = `¡Gracias ${name}! Tu mensaje ha sido enviado correctamente.`;
            }
            
            messageDiv.innerHTML = `
                <div class="success-message">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                        <i class="fas fa-check-circle" style="font-size: 24px;"></i>
                        <div>
                            <strong style="font-size: 1.1rem;">¡Mensaje Enviado con Éxito!</strong>
                            <p style="margin-top: 5px; margin-bottom: 0; opacity: 0.9;">Asunto: ${subjectText}</p>
                        </div>
                    </div>
                    <p>${responseMessage}</p>
                    
                    <div class="location-info">
                        <p><strong>📍 Tu ubicación:</strong> ${municipality}, ${department}</p>
                        <p><strong>📞 Contacto:</strong> ${name} | ${phone} | ${email}</p>
                    </div>
                    
                    <p style="margin-top: 15px; font-size: 0.9rem; opacity: 0.8;">
                        <i class="fas fa-info-circle"></i> Te responderemos pronto.
                    </p>
                </div>
            `;
            
            console.log('📋 FORMULARIO ENVIADO:');
            console.log(`📍 Ubicación: ${municipality}, ${department}`);
            
        } else {
            // ERROR
            messageDiv.innerHTML = `
                <div class="error-message">
                    <div style="display: flex; align-items: flex-start; gap: 15px;">
                        <i class="fas fa-exclamation-circle" style="font-size: 24px; margin-top: 2px;"></i>
                        <div>
                            <strong style="font-size: 1.1rem;">Completa estos campos:</strong>
                            <ul style="margin: 10px 0 0 20px; padding: 0;">
                                ${errors.map(error => `<li>${error}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }
        
        messageDiv.style.display = 'block';
        
        // Ocultar después de 8 segundos
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 8000);
    });
}

// Validar email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===========================================
// 3. WHATSAPP
// ===========================================

const whatsappToggle = document.getElementById('whatsapp-toggle');
const whatsappOptions = document.getElementById('whatsapp-options');
const closeWhatsapp = document.querySelector('.close-whatsapp');

if (whatsappToggle && whatsappOptions) {
    whatsappToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        whatsappOptions.classList.toggle('show');
    });
}

if (closeWhatsapp && whatsappOptions) {
    closeWhatsapp.addEventListener('click', function(e) {
        e.stopPropagation();
        whatsappOptions.classList.remove('show');
    });
}

document.addEventListener('click', function(e) {
    if (whatsappOptions && whatsappToggle) {
        if (!whatsappToggle.contains(e.target) && !whatsappOptions.contains(e.target)) {
            whatsappOptions.classList.remove('show');
        }
    }
});

// ===========================================
// 4. SMOOTH SCROLL
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================================
// 5. INICIALIZAR
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página de Falabella cargada');
});