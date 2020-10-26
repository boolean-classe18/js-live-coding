// Rendere visibile la scritta “Live Coding” dentro il cerchio arancione quando passo con il mouse sul cerchio.

// intercetto il mouse che "entra"
$('.cerchio').mouseenter(function() {
    $('.cerchio p').show();
});

// intercetto il mouse che "esce"
$('.cerchio').mouseleave(function() {
    $('.cerchio p').hide();
});
