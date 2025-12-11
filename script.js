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
// 2. FORMULARIO DE CONTACTO - CORREGIDO
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
            // ÉXITO - MOSTRAR MENSAJE
            let responseMessage = '';
            
            switch(subject) {
                case 'ventas':
                    responseMessage = `¡Perfecto ${name}! Tu consulta de ventas ha sido enviada. Te contactaremos pronto.`;
                    break;
                case 'soporte':
                    responseMessage = `¡Gracias ${name}! Tu solicitud de soporte técnico ha sido registrada. Nuestro equipo te contactará en máximo 24 horas.`;
                    break;
                case 'reclamos':
                    responseMessage = `¡Entendido ${name}! Hemos registrado tu reclamo. Un asesor se comunicará contigo para resolverlo.`;
                    break;
                case 'devoluciones':
                    responseMessage = `¡Procesado ${name}! Tu solicitud de devolución ha sido recibida. Te enviaremos instrucciones por email.`;
                    break;
                case 'garantias':
                    responseMessage = `¡Registrado ${name}! Tu consulta sobre garantías ha sido enviada al departamento técnico.`;
                    break;
                default:
                    responseMessage = `¡Gracias ${name}! Tu mensaje ha sido enviado correctamente. Te responderemos a la brevedad.`;
            }
            
            // Mostrar mensaje de éxito
            messageDiv.innerHTML = `
                <div class="success-message">
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                        <i class="fas fa-check-circle" style="font-size: 24px; color: #28a745;"></i>
                        <div>
                            <strong style="font-size: 1.1rem; color: #155724;">¡Mensaje Enviado con Éxito!</strong>
                            <p style="margin-top: 5px; margin-bottom: 0; opacity: 0.9; color: #155724;">Asunto: ${subjectText}</p>
                        </div>
                    </div>
                    <p style="color: #155724; margin-bottom: 15px;">${responseMessage}</p>
                    
                    <div class="location-info" style="background-color: rgba(40, 167, 69, 0.1); padding: 12px; border-radius: 8px; margin: 15px 0;">
                        <p style="margin: 5px 0; color: #155724;">
                            <strong>📍 Tu ubicación:</strong> ${municipality}, ${department}
                        </p>
                        <p style="margin: 5px 0; color: #155724;">
                            <strong>📞 Contacto registrado:</strong> ${phone} | ${email}
                        </p>
                    </div>
                    
                    <p style="margin-top: 15px; font-size: 0.9rem; color: #155724; opacity: 0.8;">
                        <i class="fas fa-info-circle"></i> El formulario se limpiará automáticamente en 5 segundos.
                    </p>
                </div>
            `;
            
            messageDiv.style.display = 'block';
            
            // LIMPIAR FORMULARIO DESPUÉS DE 2 SEGUNDOS
            setTimeout(() => {
                // Resetear todos los campos del formulario
                contactForm.reset();
                
                // Ocultar mensaje después de 5 segundos más
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
                
            }, 2000); // Esperar 2 segundos antes de limpiar
            
        } else {
            // ERROR - MOSTRAR MENSAJE DE ERROR
            messageDiv.innerHTML = `
                <div class="error-message">
                    <div style="display: flex; align-items: flex-start; gap: 15px;">
                        <i class="fas fa-exclamation-circle" style="font-size: 24px; color: #dc3545; margin-top: 2px;"></i>
                        <div>
                            <strong style="font-size: 1.1rem; color: #721c24;">Completa estos campos correctamente:</strong>
                            <ul style="margin: 10px 0 0 20px; padding: 0; color: #721c24;">
                                ${errors.map(error => `<li style="margin-bottom: 5px;">${error}</li>`).join('')}
                            </ul>
                            <p style="margin-top: 10px; color: #721c24; font-size: 0.9rem;">
                                <i class="fas fa-lightbulb"></i> Todos los campos marcados con * son obligatorios.
                            </p>
                        </div>
                    </div>
                </div>
            `;
            
            messageDiv.style.display = 'block';
            
            // Ocultar mensaje de error después de 8 segundos
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 8000);
        }
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

// Cerrar WhatsApp al hacer clic fuera
document.addEventListener('click', function(e) {
    if (whatsappOptions && whatsappToggle) {
        if (!whatsappToggle.contains(e.target) && !whatsappOptions.contains(e.target)) {
            whatsappOptions.classList.remove('show');
        }
    }
});

// Cerrar WhatsApp con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && whatsappOptions && whatsappOptions.classList.contains('show')) {
        whatsappOptions.classList.remove('show');
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
            // Cerrar menú hamburguesa si está abierto
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // Scroll suave
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================================
// 5. VALIDACIÓN EN TIEMPO REAL DEL FORMULARIO
// ===========================================

if (contactForm) {
    // Agregar validación en tiempo real a los campos
    const formInputs = contactForm.querySelectorAll('input, select, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Este campo es obligatorio');
        return false;
    }
    
    if (field.type === 'email' && value) {
        if (!isValidEmail(value)) {
            showFieldError(field, 'Ingresa un email válido');
            return false;
        }
    }
    
    clearFieldError(field);
    return true;
}

function showFieldError(field, message) {
    // Limpiar error anterior
    clearFieldError(field);
    
    // Agregar estilo de error
    field.style.borderColor = '#dc3545';
    field.style.boxShadow = '0 0 0 0.2rem rgba(220, 53, 69, 0.25)';
    
    // Crear elemento de mensaje de error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '5px';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    // Insertar después del campo
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    // Eliminar mensaje de error si existe
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// ===========================================
// 6. PREVENIR SCROLL HORIZONTAL EN MÓVIL
// ===========================================

function preventHorizontalScroll() {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
}

// ===========================================
// 7. INICIALIZAR TODO AL CARGAR LA PÁGINA
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Página de Falabella cargada y lista');
    
    // Prevenir scroll horizontal
    preventHorizontalScroll();
    
    // Agregar clase inicial para animaciones
    document.body.classList.add('loaded');
    
    // Verificar si hay errores de imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`⚠️ Imagen no encontrada: ${this.src}`);
            this.style.backgroundColor = '#f8f9fa';
            this.style.padding = '20px';
            this.alt = 'Imagen no disponible';
        });
    });
    
    // Verificar el formulario
    if (contactForm) {
        console.log('✅ Formulario de contacto detectado y configurado');
    }
    
    // Verificar WhatsApp
    if (whatsappToggle) {
        console.log('✅ Botón de WhatsApp configurado');
    }
});

// ===========================================
// 8. MEJORA: RESET DE FORMULARIO MANUAL
// ===========================================

// Función para limpiar formulario manualmente
function resetContactForm() {
    if (contactForm) {
        contactForm.reset();
        
        // Limpiar mensajes de error
        const messageDiv = document.getElementById('form-message');
        if (messageDiv) {
            messageDiv.style.display = 'none';
        }
        
        // Limpiar errores de campos
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            clearFieldError(input);
        });
        
        console.log('🔄 Formulario limpiado manualmente');
        return true;
    }
    return false;
}

// Exponer función globalmente (para probarla en consola(si quiere))
window.resetFalabellaForm = resetContactForm;