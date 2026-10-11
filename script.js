// Dados importados da planilha convertidos para JSON com imagens locais correspondentes
const giftsData = [
    { id: 1, area: 'COZINHA', name: 'JOGO DE TALHERES 91 PEÇAS', price: 'R$ 472,39', link: 'https://tramontina.com.br/faqueiro-tramontina-laguna-em-aco-inox-com-facas-de-churrasco-acabamento-em-brilho-com-detalhes-no-cabo-91-pecas/66906890.html' },
    { id: 2, area: 'COZINHA', name: 'Aparelho de Jantar Flávia Em Porcelana 20 peças Tramontina', price: 'R$ 228,32', link: 'https://www.mercadolivre.com.br/aparelho-de-jantar-flavia-em-porcelana-20-pecas-tramontina/p/MLB51226715' },
    { id: 3, area: 'COZINHA', name: 'JOGO DE TAÇAS 12 PEÇAS', price: 'R$ 91,00', link: 'https://www.mercadolivre.com.br/kit-12-tacas-de-vinho-nadir-barone-385ml-vidro-transparente/p/MLB25336086' },
    { id: 4, area: 'COZINHA', name: 'JOGO DE COPOS 12 PEÇAS', price: 'R$ 74,99', link: 'https://www.mercadolivre.com.br/conjunto-12-copos-long-drink-cylinder-300ml-nadir-figueiredo/p/MLB36060510' },
    { id: 5, area: 'COZINHA', name: 'KIT 6 ASSADEIRAS MARINEX', price: 'R$ 228,63', link: 'https://www.mercadolivre.com.br/conjunto-assadeiras-6-pecas-de-vidro-com-tampa-cinza-marinex/p/MLB28025230' },
    { id: 6, area: 'COZINHA', name: 'Tábua p/ Churrasco Inteligente c/ Bandeja de Aluminio', price: 'R$ 132,00', link: 'https://www.mercadolivre.com.br/tabua-churrasco-inteligente-2-ramequins-bandeja-alumino-xxg/up/MLBU4141167411' },
    { id: 7, area: 'COZINHA', name: 'Kit Jarra e 6 Taças Vidro Suco Abacaxi Diamante', price: 'R$ 151,90', link: 'https://www.amazon.com.br/Jarra-Abacaxi-Diamante-Transparente-Vitral/dp/B0D3J5T42W' },
    { id: 8, area: 'COZINHA', name: 'Panela de Pressão Elétrica Mondial 5L', price: 'R$ 413,09', link: 'https://www.casasbahia.com.br/panela-de-pressao-eletrica-mondial-5l-digital-master-cooker-pe-38-5l-preta-15003619.html' },
    { id: 9, area: 'COZINHA', name: 'Conjunto De Louças Gibson Home Zen Buffetware De 39 Peças', price: 'R$ 1.314,29', link: 'https://www.mercadolivre.com.br/conjunto-de-loucas-gibson-home-zen-buffetware-39-pecas-branc/p/MLB2070468596' },
    { id: 10, area: 'COZINHA', name: 'Cuscuzeira com Fundo Triplo 2 Peças', price: 'R$ 191,00', link: 'https://www.amazon.com.br/Cuscuzeira-Fundo-Triplo-Tramontina-65650050/dp/B01NBR0QAG' },
    { id: 11, area: 'COZINHA', name: 'Panela De Arroz Elétrica Dako 700W com 4L', price: 'R$ 280,00', link: 'https://www.mercadolivre.com.br/panela-de-arroz-eletrica-dako-700w-com-4-l-10-xicaras-cinza' },
    { id: 12, area: 'COZINHA', name: 'Panificadora Automática Mondial Master Bread', price: 'R$ 629,11', link: 'https://www.casasbahia.com.br/panificadora-automatica-mondial-master-bread-npf-54' },
    { id: 13, area: 'COZINHA', name: 'Kit 10 Pano De Prato Branco', price: 'R$ 70,00', link: 'https://www.mercadolivre.com.br/kit-10-pano-de-prato-branco-com-bainha-grande-algodao/up/MLBU4486759906' },
    { id: 14, area: 'COZINHA', name: 'Kit Assadeiras Retangulares Aço Inox', price: 'R$ 138,72', link: 'https://shopee.com.br/product/1687155666/58259738732' },
    { id: 15, area: 'COZINHA', name: 'Formas Assadeira Alumínio Bolo Pudim Redondo', price: 'R$ 50,00', link: 'https://shopee.com.br/product/1658249312/58218043296' },
    { id: 16, area: 'COZINHA', name: 'Kit 11 Peças Utensílios de Cozinha Dourado', price: 'R$ 60,00', link: 'https://shopee.com.br/product/1264658578/18098299116' },
    { id: 17, area: 'COZINHA', name: 'Jogo Americano com Guardanapo', price: 'R$ 130,00', link: 'https://shopee.com.br/product/744202889/57308351322' },
    { id: 18, area: 'COZINHA', name: 'Toalha De Mesa Xadrez Bege E Off White', price: 'R$ 180,00', link: 'https://www.mercadolivre.com.br/toalha-de-mesa-xadrez-bege-e-off-white-ret-210m-x-140m/p/MLB65892619' },
    { id: 19, area: 'COZINHA', name: 'Jogo de Xícaras COM PIRES 12 Peças', price: 'R$ 80,00', link: 'https://shopee.com.br/product/1040358773/22099690631' },
    { id: 20, area: 'COZINHA', name: 'Kit 4 Capas De Almofada', price: 'R$ 70,00', link: 'https://produto.mercadolivre.com.br/MLB-5138069141-kit-4-capas-de-almofada-linho-premiun' },
    { id: 21, area: 'COZINHA', name: 'Omeleteira Easy Omelet Mondial', price: 'R$ 150,00', link: 'https://www.mercadolivre.com.br/omeleteira-easy-omelet-mondial-800w-om-02/p/MLB29601906' },
    { id: 22, area: 'ELETRODOMESTICOS', name: 'Fogão 4 Bocas de Embutir Dako Supreme Mesa de Vidro', price: 'R$ 2.734,00', link: 'https://www.amazon.com.br/Fog%C3%A3o-Embutir-Dako-Supreme-Bivolt/dp/B0FVJFTS1D' },
    { id: 23, area: 'ELETRODOMESTICOS', name: 'Geladeira Panasonic BB65 Espelhada Inverse Frost Free 467L', price: 'R$ 4.859,10', link: 'https://www.magazineluiza.com.br/geladeira-panasonic-bb65-espelhada-inverse-frost-free-467-litros-inverter' },
    { id: 24, area: 'ELETRODOMESTICOS', name: 'Fritadeira Air Fryer Forno Oven 12L Mondial', price: 'R$ 689,00', link: 'https://www.amazon.com.br/Fritadeira-Fryer-Forno-Mondial-Preto/dp/B0BZJDB39Z' },
    { id: 25, area: 'ELETRODOMESTICOS', name: 'Cafeteira Elétrica Electrolux Inox com Timer 1,5L', price: 'R$ 249,87', link: 'https://www.amazon.com.br/Electrolux-ECM30-Cafeteira/dp/B09CC2RYTZ' },
    { id: 26, area: 'ELETRODOMESTICOS', name: 'Lava Louças Electrolux 14 Serviços Preta', price: 'R$ 4.999,00', link: 'https://www.amazon.com.br/Lou%C3%A7as-Electrolux-Servi%C3%A7os-Fun%C3%A3o-Higienizar/dp/B09BBNL8MV' },
    { id: 27, area: 'ELETRODOMESTICOS', name: 'Lava e Seca Samsung 11kg', price: 'R$ 8.799,00', link: 'https://www.magazineluiza.com.br/lava-e-seca-samsung-11kg' },
    { id: 28, area: 'ELETRODOMESTICOS', name: 'Ar Condicionado Bi Split Inverter LG 9000 e 12000 BTUs', price: 'R$ 4.679,10', link: 'https://www.amazon.com.br/Condicionado-Split-Inverter-LG-S32Q16UAGA0' },
    { id: 29, area: 'ELETRODOMESTICOS', name: 'Mixer 3 em 1 Electrolux Preto 400W TruFlow', price: 'R$ 179,00', link: 'https://www.mercadolivre.com.br/mixer-3-em-1-electrolux-preto-400w-com-tecnologia-truflow-eib10-220v/p/MLB18455412' },
    { id: 30, area: 'QUARTOS', name: 'Cama Box Baú Casal Bipartido Colchão Comfort Class', price: 'R$ 2.104,21', link: 'https://www.magazineluiza.com.br/cama-box-bau-casal-bipartido-colchao-comfort-class' },
    { id: 31, area: 'QUARTOS', name: 'Jogo De Cama Casal 4 Peças 100% Algodão', price: 'R$ 275,90', link: 'https://www.mercadolivre.com.br/jogo-de-cama-casal-4-pecas-karsten-160-fios-100-algodao' },
    { id: 32, area: 'QUARTOS', name: 'Kit 4 Travesseiro Ortobom Percal 200 Fios', price: 'R$ 192,53', link: 'https://www.mercadolivre.com.br/kit-4-travesseiro-ortobom-percal-200-fios-100-algodao-cor-branco/p/MLB24864789' },
    { id: 33, area: 'QUARTOS', name: 'Saia Box Casal', price: 'R$ 50,00', link: 'https://www.magazineluiza.com.br/saia-box-casal-padrao-matelado-ultra-quadriculada' },
    { id: 34, area: 'SALA', name: 'SOFA 3 LUGARES CINZA', price: 'R$ 1.056,30', link: 'https://www.americanas.com.br/produto/3464181006/sofa-cama-3-lugares-casal-premium' },
    { id: 35, area: 'SALA', name: 'Mesa de Jantar Liz 120cm', price: 'R$ 520,00', link: 'https://shopee.com.br/product/1033307532/20799848459' },
    { id: 36, area: 'SALA', name: 'Kit 4 Cadeiras de Jantar Savana Estofada', price: 'R$ 988,41', link: 'https://shopee.com.br/product/1779492848/58217863648' },
    { id: 37, area: 'SALA', name: 'Vision AI TV 50 polegadas QLED 4K QEF1', price: 'R$ 3.483,00', link: 'https://www.samsung.com/br/tvs/qled-tv/qef1-50-inch-qled-4k-smart-tv-qn50qef1agxzd/' },
    { id: 38, area: 'BANHEIRO', name: 'Jogo de toalha de banho e rosto 100% Algodão', price: 'R$ 194,00', link: 'https://www.casasbahia.com.br/jogo-de-toalha-de-banho-e-rosto-100-algodao-karsten-yuna' },
    { id: 39, area: 'BANHEIRO', name: 'Toalheiro Elétrico Alumínio Toalhas', price: 'R$ 255,00', link: 'https://produto.mercadolivre.com.br/MLB-1015598184-toalheiro-eletrico-aluminio-toalhas' },
    { id: 40, area: 'ELETRODOMESTICOS', name: 'Robô Aspirador Electrolux 4 em 1', price: 'R$ 1.379,90', link: 'https://www.casasbahia.com.br/robo-aspirador-electrolux-4-em-1-wi-fi-experience-ate-1h40-mapeamento-cinza-erb61-1576506970.html'},
    { id: 41, area: 'ELETRODOMESTICOS', name: 'Multiprocessador', price: 'R$ 329,90', link: 'https://www.mercadolivre.com.br/multiprocessador-walita-preto-1000w-hr730492/p/MLB66418382?pdp_filters=item_id%3AMLB6530548380&from=gshop&matt_tool=74738421&matt_word=&matt_source=google&matt_campaign_id=22090354220&matt_ad_group_id=197094184531&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792355617054&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB66418382-product&matt_product_partition_id=2687566804952&matt_target_id=aud-2493968549214:pla-2687566804952&cq_src=google_ads&cq_cmp=22090354220&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354220&gclid=Cj0KCQjwxKfWBhDkARIsAMKwkNZcn8AabvTEdedjtkN7ZM9jO62COEe0-q73qO6xovoyyctVATybbhIaAqTREALw_wcB'},
    { id: 42, area: 'ELETRODOMESTICOS', name: 'Depurador de Ar', price: 'R$ 413,24', link: 'https://www.magazineluiza.com.br/depurador-de-ar-electrolux-60cm-4-bocas-3-velocidades-de6ss/p/241634200/ed/depu/?&seller_id=magazineluiza&utm_source=google&utm_medium=cpc&utm_term=84369&utm_campaign=google_eco_per_ven_pla_ele_sor_1p_ed2-0326&utm_content=&partner_id=84369&gclsrc=aw.ds&gad_source=1&gad_campaignid=23600187983&gclid=Cj0KCQjwxKfWBhDkARIsAMKwkNbwg6PckBCniVWYPwBsMiLnQg9W3b-oKxR33Vunh5-ZzfU8_lgdl9waAmrdEALw_wcB'}
];

function renderGifts(filter = 'TODOS') {
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';

    const filtered = filter === 'TODOS'
        ? giftsData
        : giftsData.filter(item => item.area.toUpperCase() === filter.toUpperCase());

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color: #777;">Nenhum item encontrado nesta categoria.</p>';
        return;
    }

    filtered.forEach(gift => {
        const card = document.createElement('div');
        card.className = 'gift-card';

        // Usa a imagem correspondente na pasta imagens_produtos/
        const imagePath = `assets/produto_${gift.id}.png`;

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${imagePath}" alt="${gift.name}" onerror="this.src='https://cdn-icons-png.flaticon.com/512/1041/1041916.png'">
            </div>
            <div class="card-info">
                <span class="item-name">${gift.name}</span>
                <span class="item-price">${gift.price}</span>
            </div>
            <div class="card-action">
                <span class="solicitado-txt">1 solicitado</span>
                <a href="${gift.link}" target="_blank" class="buy-btn">
                    <i class="fa-solid fa-cart-shopping"></i> COMPRAR
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterItems(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderGifts(category);
}

function copyAddress() {
    const addressText = document.getElementById('address-text').innerText;
    navigator.clipboard.writeText(addressText).then(() => {
        const feedback = document.getElementById('copy-feedback');
        feedback.style.display = 'block';
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 3000);
    }).catch(err => {
        console.error('Erro ao copiar endereço: ', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderGifts('TODOS');
});