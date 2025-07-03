// Animation pour l'apparition des sections du menu
document.addEventListener('DOMContentLoaded', function() {
    const menuSections = document.querySelectorAll('.menu-section');
    
    // Animation d'apparition progressive
    menuSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Effet de hover sur les éléments du menu
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Ajout d'un effet de clic sur les prix
    const prices = document.querySelectorAll('.price');
    
    prices.forEach(price => {
        price.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            this.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.background = 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)';
            }, 200);
        });
    });
    
    // Message de bienvenue dans la console
    console.log('🍽️ Bienvenue au Restaurant Le Bon Goût!');
    console.log('Menu chargé avec succès.');
});

// Fonction pour calculer le total d'une commande (fonctionnalité future)
function calculateTotal(selectedItems) {
    let total = 0;
    selectedItems.forEach(item => {
        total += parseFloat(item.price);
    });
    return total;
}

// Fonction pour afficher les allergènes (fonctionnalité future)
function showAllergens(itemName) {
    console.log(`Informations allergènes pour: ${itemName}`);
    // Cette fonction pourrait être étendue pour afficher des informations détaillées
}