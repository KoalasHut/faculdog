'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    // This will come from database

    model.owner = {
    	name: 'Bruno José',
    	phone: '(15) 9 96608690',
    	phoneRaw: '+5515996608690',
    	cellphone: '(15) 9 96608690',
    	address: {

    	}
    };

    // Social
    model.socials = [
    	{
    		title: 'Facebook',
    		href: '#',
    		image: {
    			src: '/images/social-icons/facebook.png',
    		}
    	},
    	{
    		title: 'Twitter',
    		href: '#',
    		image: {
    			src: '/images/social-icons/twitter.png'
    		}
    	},
    	{
    		title: 'Instagram',
    		href: '#',
    		image: {
    			src: '/images/social-icons/instagram.png'
    		}
    	},
    	{
    		title: 'Mail',
    		href: '#',
    		image: {
    			src: '/images/social-icons/sparow.png'
    		}
    	}
    ];

    // Menu
    model.menuOptions = [
    	{
    		label: 'quem somos',
    		href: '/'
    	},
    	{
    		label: 'servicos',
    		href: '/servicos'
    		children: [
    			{
		    		label: 'adestramento',
		    		href: '/servicos/adestramento'
		    	},
		    	{
		    		label: 'consulta presencial',
		    		href: '/servicos/consulta-presencial'
		    	},
		    	{
		    		label: 'consulta a distância',
		    		href: '/servicos/consulta-a-distancia'
		    	},
		    	{
		    		label: 'cursos',
		    		href: '/servicos/cursos'
		    	}
    		],
    		href: '/servicos'
    	},
    	{
    		label: 'trabalho',
    		href: '/trabalho'
    	},
    	{
    		label: 'fale conosco',
    		href: '/fale-conosco'
    	}
    ];

    // Slider
    model.landingSlider = {
    	'arrows': true,
    	'fluid': true,
    	'dots': true,
    	'slides': [
	    	{
	    		title: 'Adestramento e consulta comportamental',
	    		description: 'Saiba mais sobre os serviços que a Faculdog oferece!',
	    		image: {
	    			src: '/images/slider/slide-04.jpg'
	    		}
	    	},
	    	{
	    		title: 'Preparação para Agility entre outras competições de obediência',
	    		description: 'Clique aqui e veja como preparar seu cão',
	    		image: {
	    			src: '/images/slider/slide-01.jpg'
	    		}
	    	},
	    	{
	    		title: 'Qual brinquedo devo dar para meu cão?',
	    		description: 'Veja se seu cão está com o brinquedo correto e se você o está utilizando da melhor forma.',
	    		image: {
	    			src: '/images/slider/slide-02.jpg'
	    		}
	    	},
	    	{
	    		title: 'Será que seu cão merece os confortos que você está oferecendo?',
	    		description: 'Veja como ensinar seu cão a respeitar você e seu espaço, impor os limites é essencial',
	    		image: {
	    			src: '/images/slider/slide-03.jpg'
	    		}
	    	}
	    ]
    };

    // Services
    model.services = [
    	{
    		title: 'Adestramento',
    		subtitle: 'Em domicílio',
    		image: {
    			src: '/images/services/adestramento-em-domicilio.png'
    		}
    	},
    	{
    		title: 'Consulta',
    		subtitle: 'Comportamental presencial',
    		image: {
    			src: '/images/services/consulta-presencial.png'
    		}
    	},
    	{
    		title: 'Consulta',
    		subtitle: 'Comportamental à distância',
    		image: {
    			src: '/images/services/consulta-distancia.png'
    		}
    	},
    	{
    		title: 'Cursos',
    		subtitle: 'E palestras',
    		image: {
    			src: '/images/services/cursos.png'
    		}
    	}
    ];

    router.get('/', function (req, res) {
        
        
        res.render('layouts/landing/index', model);
        
        
    });

};
