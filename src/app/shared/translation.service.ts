import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Language = 'es' | 'en' | 'pt';

const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.schedule': 'Lun-Sáb: 9am a 6pm',
    'nav.search': 'Buscar...',
    'nav.home': 'Inicio',
    'nav.packages': 'Paquetes',
    'nav.contact': 'Contáctanos',
    'home.eyebrow': 'Descubre la Belleza',
    'home.headline': 'Deja el camino atrás, y vive Aterriza Perú',
    'home.intro': '¿Planificando un viaje? ¡Organizamos tu viaje con los mejores lugares y el mejor presupuesto!',
    'home.adventureTitle': 'Empieza tu próxima aventura',
    'home.adventureText': 'Explora destinos increíbles y encuentra la mejor opción ideal para ti.',
    'tour.breadcrumb': 'Tour',
    'tour.duration': 'Duración',
    'tour.type': 'Tipo',
    'tour.groupSize': 'Tamaño de grupo:',
    'tour.languages': 'Idiomas',
    'tour.perPerson': 'por persona',
    'tour.description': 'Descripción del tour:',
    'tour.included': '¿Qué incluye?',
    'tour.faq': 'Preguntas y Respuestas:',
    'tour.contact': 'Contactate con un asesor',
    'package.title': 'Paquetes de Tours',
    'package.buy': 'Comprar',
    'package.notFound': 'Tour no encontrado',
    'package.notFoundText': 'El paquete que buscas no existe o fue removido.',
    'package.backHome': 'Volver al inicio',
    'contact.contact': 'Contáctanos',
    'contact.getInTouch': '¡Ponte en contacto!',
    'contact.yourName': 'Tu nombre:',
    'contact.namePlaceholder': 'Nombre:',
    'contact.yourEmail': 'Tu correo electrónico:',
    'contact.emailPlaceholder': 'Correo electrónico:',
    'contact.yourQuestion': 'Tu consulta:',
    'contact.subjectPlaceholder': 'Asunto:',
    'contact.yourComment': 'Tu comentario:',
    'contact.messagePlaceholder': 'Mensaje:',
    'contact.sendMessage': 'Enviar mensaje',
    'contact.phone': 'Teléfono',
    'contact.phoneDescription': 'Estamos aquí para ayudarte a planificar tu próximo viaje.',
    'contact.email': 'Correo electrónico',
    'contact.emailDescription': 'Escríbenos y te ayudaremos a encontrar la mejor experiencia.',
    'contact.location': 'Ubicación',
    'contact.locationDescription': 'Atendemos tus consultas desde Aterriza Perú.',
    'contact.viewMap': 'Ver en Google Maps',
    'terms.accept': 'Aceptar',
    'terms.decline': 'Rechazar',
  },
  en: {
    'nav.schedule': 'Mon-Sat: 9am to 6pm',
    'nav.search': 'Search...',
    'nav.home': 'Home',
    'nav.packages': 'Packages',
    'nav.contact': 'Contact us',
    'home.eyebrow': 'Discover the Beauty',
    'home.headline': 'Leave the road behind and experience Aterriza Perú',
    'home.intro': 'Planning a trip? We organize your trip with the best places and the best budget!',
    'home.adventureTitle': 'Start your next adventure',
    'home.adventureText': 'Explore incredible destinations and find the best option for you.',
    'tour.breadcrumb': 'Tour',
    'tour.duration': 'Duration',
    'tour.type': 'Type',
    'tour.groupSize': 'Group size:',
    'tour.languages': 'Languages',
    'tour.perPerson': 'per person',
    'tour.description': 'Tour description:',
    'tour.included': "What's included?",
    'tour.faq': 'Questions and Answers:',
    'tour.contact': 'Contact an advisor',
    'package.title': 'Tour Packages',
    'package.buy': 'Buy',
    'package.notFound': 'Tour not found',
    'package.notFoundText': 'The package you are looking for does not exist or has been removed.',
    'package.backHome': 'Back to home',
    'contact.contact': 'Contact us',
    'contact.getInTouch': 'Get in touch!',
    'contact.yourName': 'Your name:',
    'contact.namePlaceholder': 'Name:',
    'contact.yourEmail': 'Your email:',
    'contact.emailPlaceholder': 'Email:',
    'contact.yourQuestion': 'Your question:',
    'contact.subjectPlaceholder': 'Subject:',
    'contact.yourComment': 'Your comment:',
    'contact.messagePlaceholder': 'Message:',
    'contact.sendMessage': 'Send message',
    'contact.phone': 'Phone',
    'contact.phoneDescription': 'We are here to help you plan your next trip.',
    'contact.email': 'Email',
    'contact.emailDescription': 'Write to us and we will help you find the best experience.',
    'contact.location': 'Location',
    'contact.locationDescription': 'We handle your inquiries from Aterriza Perú.',
    'contact.viewMap': 'View on Google Maps',
    'terms.accept': 'Accept',
    'terms.decline': 'Decline',
  },
  pt: {
    'nav.schedule': 'Seg-Sáb: 9h às 18h',
    'nav.search': 'Pesquisar...',
    'nav.home': 'Início',
    'nav.packages': 'Pacotes',
    'nav.contact': 'Fale conosco',
    'home.eyebrow': 'Descubra a Beleza',
    'home.headline': 'Deixe o caminho para trás e viva Aterriza Perú',
    'home.intro': 'Planejando uma viagem? Organizamos sua viagem com os melhores lugares e o melhor orçamento!',
    'home.adventureTitle': 'Comece sua próxima aventura',
    'home.adventureText': 'Explore destinos incríveis e encontre a melhor opção para você.',
    'tour.breadcrumb': 'Tour',
    'tour.duration': 'Duração',
    'tour.type': 'Tipo',
    'tour.groupSize': 'Tamanho do grupo:',
    'tour.languages': 'Idiomas',
    'tour.perPerson': 'por pessoa',
    'tour.description': 'Descrição do tour:',
    'tour.included': 'O que está incluído?',
    'tour.faq': 'Perguntas e Respostas:',
    'tour.contact': 'Fale com um consultor',
    'package.title': 'Pacotes de Tours',
    'package.buy': 'Comprar',
    'package.notFound': 'Tour não encontrado',
    'package.notFoundText': 'O pacote que você procura não existe ou foi removido.',
    'package.backHome': 'Voltar ao início',
    'contact.contact': 'Fale conosco',
    'contact.getInTouch': 'Entre em contato!',
    'contact.yourName': 'Seu nome:',
    'contact.namePlaceholder': 'Nome:',
    'contact.yourEmail': 'Seu e-mail:',
    'contact.emailPlaceholder': 'E-mail:',
    'contact.yourQuestion': 'Sua dúvida:',
    'contact.subjectPlaceholder': 'Assunto:',
    'contact.yourComment': 'Seu comentário:',
    'contact.messagePlaceholder': 'Mensagem:',
    'contact.sendMessage': 'Enviar mensagem',
    'contact.phone': 'Telefone',
    'contact.phoneDescription': 'Estamos aqui para ajudar você a planejar sua próxima viagem.',
    'contact.email': 'E-mail',
    'contact.emailDescription': 'Escreva para nós e ajudaremos você a encontrar a melhor experiência.',
    'contact.location': 'Localização',
    'contact.locationDescription': 'Atendemos suas consultas desde a Aterriza Perú.',
    'contact.viewMap': 'Ver no Google Maps',
    'terms.accept': 'Aceitar',
    'terms.decline': 'Recusar',
  },
};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly language = signal<Language>(this.savedLanguage());

  t(key: string): string {
    return translations[this.language()][key] ?? translations.es[key] ?? key;
  }

  setLanguage(language: Language): void {
    this.language.set(language);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    }
  }

  private savedLanguage(): Language {
    if (!isPlatformBrowser(this.platformId)) {
      return 'es';
    }

    const language = localStorage.getItem('language');
    return language === 'en' || language === 'pt' ? language : 'es';
  }
}