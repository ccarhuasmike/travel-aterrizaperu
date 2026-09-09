import { Component, computed, inject } from '@angular/core';
import { TranslationService, type Language } from '../../shared/translation.service';

interface TermsSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
}

const termsContent: Record<Language, TermsSection[]> = {
  es: [
    {
      title: 'Introducción',
      paragraphs: [
        'AGL GROUP SAC, empresa intermediaria de servicios turísticos, recomienda leer los Términos y Condiciones de aterrizaperu.com, en adelante el Sitio Web. El uso del Sitio Web está condicionado a la aceptación de estos términos. Al utilizarlo, el usuario manifiesta su aceptación. Las modificaciones tendrán efecto desde el momento en que se publiquen y nunca de manera retroactiva.',
      ],
    },
    {
      title: 'Definiciones',
      paragraphs: [
        'USUARIO: persona peruana o extranjera que viaja temporalmente y utiliza el Sitio Web para disfrutar los servicios turísticos ofrecidos por sus proveedores.',
        'PROVEEDOR: persona jurídica, entidad o persona natural que proporciona directamente los servicios turísticos contratados, reservados o adquiridos por el usuario a través del Sitio Web.',
      ],
    },
    {
      title: 'Declaración expresa',
      paragraphs: ['Al aceptar estos Términos y Condiciones, el usuario declara expresamente lo siguiente:'],
      items: [
        'Ser mayor de edad y contar con plena capacidad legal para celebrar contratos.',
        'Utilizar el Sitio Web para adquirir servicios turísticos para sí mismo, sus dependientes o las personas a quienes represente legalmente.',
        'Revisar la información enviada al correo proporcionado, incluida la confirmación, modificación o inconveniente de su reserva.',
        'Informarse y verificar con anticipación los requisitos de ingreso, tránsito, licencias, vacunas y permisos aplicables a cada destino.',
        'Contar con los requisitos exigidos por las leyes aplicables cuando adquiera productos con destino o escala en Cuba.',
        'Proporcionar información real, exacta, vigente y completa.',
      ],
    },
    {
      title: 'AGL GROUP SAC',
      paragraphs: [
        'AGL GROUP SAC es una empresa peruana constituida bajo las leyes del Perú, cuenta con los permisos sectoriales necesarios y actúa como intermediaria entre los proveedores de servicios turísticos y los usuarios. Ofrece, entre otros, reservas de transporte, hospedaje, atracciones y paquetes de viaje. Confirmada una reserva, el servicio turístico será prestado directamente por el proveedor correspondiente.',
      ],
    },
    {
      title: 'Uso del sitio web',
      paragraphs: [
        'El Sitio Web debe utilizarse únicamente para realizar reservas legítimas. Está prohibido efectuar reservas especulativas, falsas o fraudulentas. Sus textos, gráficos, fotografías, marcas, logotipos, diseños, compilaciones de datos, códigos y software pertenecen a AGL GROUP SAC o se utilizan con autorización. No pueden copiarse, reproducirse, modificarse, transmitirse ni distribuirse sin autorización previa y escrita, salvo para uso personal.',
        'Cada proveedor cuenta con sus propias regulaciones para la prestación de sus servicios turísticos. El usuario debe revisarlas antes de contratar.',
      ],
    },
    {
      title: 'Sobre los vuelos',
      paragraphs: [
        'Las compañías aéreas establecen sus propias tarifas, condiciones y restricciones. Las tarifas pueden ser no reembolsables, no transferibles o limitar cambios de ruta, estadías y devoluciones. AGL GROUP SAC no puede modificar esas regulaciones.',
        'La disponibilidad, tarifas y demás datos son actualizados por cada compañía aérea. El precio definitivo queda fijado con la confirmación de la reserva, emisión del ticket electrónico y facturación.',
        'Las aerolíneas pueden modificar horarios, fechas e itinerarios, demorar, reprogramar o cancelar vuelos. Los reclamos por la prestación del transporte deben dirigirse a la compañía aérea.',
        'Se recomienda presentarse con dos horas de anticipación para vuelos nacionales y tres horas para vuelos internacionales. El pasajero debe verificar nombres, apellidos y documentos antes de la emisión del ticket.',
        'Las tarifas low cost, promo o light pueden no incluir cambios, cancelaciones, asiento, equipaje facturado, alimentos ni entretenimiento. El usuario debe revisar las condiciones antes de confirmar su compra.',
      ],
    },
    {
      title: 'Sobre las vacunas',
      paragraphs: [
        'El usuario debe verificar los requisitos sanitarios antes de viajar, ya que pueden cambiar. Recomendamos contrastar la información con fuentes oficiales y consultar los requisitos sobre fiebre amarilla, malaria o paludismo con la Organización Mundial de la Salud y las autoridades del destino.',
      ],
    },
    {
      title: 'Responsabilidad',
      paragraphs: [
        'AGL GROUP SAC actúa únicamente como intermediaria y no responde por deficiencias, accidentes, daños, retrasos o irregularidades de los servicios prestados directamente por los proveedores. Tampoco controla sus acciones, disponibilidad, puntualidad, categorías, fotografías, condiciones meteorológicas, manifestaciones, guerras o hechos de fuerza mayor.',
        'El usuario reconoce que la relación por el transporte, hospedaje, cruceros, alquiler de autos y demás servicios es directa con el proveedor. Se recomienda contratar un seguro de viaje y dirigir al proveedor cualquier reclamo relacionado con su servicio.',
      ],
    },
    {
      title: 'Políticas de reservación',
      paragraphs: [
        'Las tarifas son válidas al momento de la cotización y pueden variar hasta confirmar la reserva. Una reserva se considera completada cuando existe un número de confirmación y se ha aplicado el cargo correspondiente. Todas las reservas están sujetas a disponibilidad y la disponibilidad no se garantiza hasta recibir el pago total.',
        'Para modificar o cancelar una reserva, el usuario debe contactar cuanto antes a su asesor indicando el número de reserva. Los cambios están sujetos a disponibilidad, nueva cotización y las condiciones del proveedor.',
      ],
    },
    {
      title: 'Políticas de pago',
      paragraphs: [
        'El importe de una reserva confirmada se cargará a la tarjeta o medio de pago indicado. Se aceptan Visa, MasterCard, Diners y American Express, además de los medios informados por la agencia. Las tarifas se cotizan en dólares estadounidenses al tipo de cambio vigente y los comprobantes se emitirán según corresponda.',
      ],
    },
    {
      title: 'Política de cancelación',
      paragraphs: [
        'Toda cancelación debe solicitarse por escrito al correo de la agencia e indicar el número de reserva. Las condiciones dependen del hotel, tour, transporte o tarifa contratada y deben revisarse antes de confirmar.',
      ],
      items: [
        'Hoteles cancelados con 15 días o más de anticipación: cargo general del 20% del total.',
        'Hoteles cancelados entre 14 y 3 días antes: cargo de dos noches o hasta el 50%, según el hotel.',
        'Cancelaciones entre 2 y 0 días antes, no presentación o salida anticipada: pueden penalizarse al 100%.',
        'Tours y transporte cancelados con 3 días o más: cargo general del 50%.',
        'Tours y transporte cancelados entre 2 y 0 días antes o no presentación: pueden penalizarse al 100%.',
      ],
    },
    {
      title: 'Procedimiento de consultas y reclamos',
      paragraphs: [
        'Para consultas, modificaciones, cancelaciones, reenvío de vouchers o reclamos, el usuario puede contactarnos en reservas@aterrizaperu.com o al +51 1 616 9080. Los reclamos deben presentarse dentro de los 30 días siguientes al término del viaje o al hecho que los motivó, con una descripción clara y los documentos de respaldo.',
      ],
    },
    {
      title: 'Aceptación del cliente',
      paragraphs: ['Estas condiciones y la documentación entregada al cliente conforman el Contrato de Viaje. El cliente declara conocerlas y aceptarlas.'],
    },
    {
      title: 'Sitios sociales',
      paragraphs: [
        'El Sitio Web puede enlazar a Facebook, Instagram, LinkedIn, Twitter y YouTube administrados por AGL GROUP SAC. Estos canales tienen fines informativos y de difusión. AGL GROUP SAC no responde por publicaciones, comentarios, fotografías, videos o material de terceros ni por el uso incorrecto que se haga de dichos sitios.',
      ],
    },
  ],
  en: [
    { title: 'Introduction', paragraphs: ['AGL GROUP SAC is a tourism services intermediary. Use of aterrizaperu.com is subject to acceptance of these Terms and Conditions. By using the website, the user accepts them and any future changes, effective when published.'] },
    { title: 'Definitions', paragraphs: ['USER: a Peruvian or foreign person temporarily travelling and using the website to enjoy tourism services. PROVIDER: the legal entity or individual directly providing the tourism services contracted through the website.'] },
    { title: 'Express declaration', paragraphs: ['By accepting these terms, the user confirms that they are legally capable, provide accurate information, monitor their email, and verify all entry, transit, health, visa and minor-travel requirements for the selected destination.'] },
    { title: 'AGL GROUP SAC', paragraphs: ['AGL GROUP SAC is a Peruvian company that acts as an intermediary between users and tourism providers. It offers reservations for transportation, accommodation, attractions and travel packages; the provider directly delivers the confirmed service.'] },
    { title: 'Website use', paragraphs: ['The website may only be used for legitimate reservations. Fraudulent, speculative or false reservations are prohibited. Website content is owned by AGL GROUP SAC or used under authorization and may not be copied or commercially reused without prior written permission.'] },
    { title: 'Flights', paragraphs: ['Airlines set their own fares, restrictions, availability, schedules and cancellation rules. The user must review the fare conditions, verify passenger details and arrive at least two hours early for domestic flights and three hours early for international flights. Claims concerning air transport must be addressed to the airline.'] },
    { title: 'Vaccinations', paragraphs: ['Travellers must verify current health requirements with official sources before departure, including requirements concerning yellow fever, malaria and other destination-specific conditions.'] },
    { title: 'Liability', paragraphs: ['AGL GROUP SAC acts only as an intermediary and is not responsible for the acts, omissions, delays, cancellations, availability, weather, force majeure events or service deficiencies of direct providers. Travel insurance is recommended.'] },
    { title: 'Reservation policy', paragraphs: ['Quoted fares are valid at the time of quotation and remain subject to availability until payment and confirmation. Changes or cancellations must be requested promptly and remain subject to provider rules, availability and repricing.'] },
    { title: 'Payment policy', paragraphs: ['Confirmed reservations are charged to the payment method selected by the user. Published fares are quoted in US dollars at the exchange rate applicable on the transaction date.'] },
    { title: 'Cancellation policy', paragraphs: ['Cancellation conditions depend on the contracted hotel, tour, transport service or fare. The user must request cancellation in writing and review the applicable conditions before booking.'] },
    { title: 'Questions and claims', paragraphs: ['Questions, changes, cancellations and claims may be sent to reservas@aterrizaperu.com or +51 1 616 9080. Claims should be submitted within 30 days and include a clear description and supporting documents.'] },
    { title: 'Client acceptance', paragraphs: ['These conditions and the documents delivered to the client form the Travel Contract. The client declares that they know and accept them.'] },
    { title: 'Social media', paragraphs: ['The website may link to social media accounts operated by AGL GROUP SAC. They are informational channels, and AGL GROUP SAC is not responsible for third-party content or misuse of those sites.'] },
  ],
  pt: [
    { title: 'Introdução', paragraphs: ['A AGL GROUP SAC é uma intermediária de serviços turísticos. O uso de aterrizaperu.com depende da aceitação destes Termos e Condições. Ao utilizar o site, o usuário aceita estes termos e suas futuras alterações, válidas a partir da publicação.'] },
    { title: 'Definições', paragraphs: ['USUÁRIO: pessoa peruana ou estrangeira que viaja temporariamente e utiliza o site para desfrutar serviços turísticos. FORNECEDOR: pessoa jurídica ou natural que presta diretamente os serviços contratados por meio do site.'] },
    { title: 'Declaração expressa', paragraphs: ['Ao aceitar estes termos, o usuário confirma que possui capacidade legal, fornece informações corretas, acompanha seu e-mail e verifica todos os requisitos de entrada, trânsito, saúde, visto e viagem de menores do destino escolhido.'] },
    { title: 'AGL GROUP SAC', paragraphs: ['A AGL GROUP SAC é uma empresa peruana que atua como intermediária entre usuários e fornecedores turísticos. Oferece reservas de transporte, hospedagem, atrações e pacotes; o fornecedor presta diretamente o serviço confirmado.'] },
    { title: 'Uso do site', paragraphs: ['O site deve ser utilizado apenas para reservas legítimas. Reservas fraudulentas, especulativas ou falsas são proibidas. O conteúdo pertence à AGL GROUP SAC ou é utilizado com autorização e não pode ser copiado ou explorado comercialmente sem autorização prévia por escrito.'] },
    { title: 'Voos', paragraphs: ['As companhias aéreas definem tarifas, restrições, disponibilidade, horários e regras de cancelamento. O usuário deve revisar as condições, conferir os dados do passageiro e chegar com pelo menos duas horas de antecedência em voos domésticos e três horas em voos internacionais. Reclamações sobre o transporte aéreo devem ser dirigidas à companhia aérea.'] },
    { title: 'Vacinas', paragraphs: ['O viajante deve verificar os requisitos sanitários atuais em fontes oficiais antes da partida, incluindo febre amarela, malária e outras exigências específicas do destino.'] },
    { title: 'Responsabilidade', paragraphs: ['A AGL GROUP SAC atua somente como intermediária e não se responsabiliza por atos, omissões, atrasos, cancelamentos, disponibilidade, clima, força maior ou falhas dos fornecedores diretos. Recomenda-se contratar seguro de viagem.'] },
    { title: 'Política de reservas', paragraphs: ['As tarifas cotadas são válidas no momento da cotação e dependem de disponibilidade até o pagamento e a confirmação. Alterações ou cancelamentos devem ser solicitados rapidamente e estão sujeitos às regras, disponibilidade e nova cotação do fornecedor.'] },
    { title: 'Política de pagamento', paragraphs: ['Reservas confirmadas serão cobradas no meio de pagamento escolhido. As tarifas publicadas são cotadas em dólares americanos conforme a taxa de câmbio vigente na data da transação.'] },
    { title: 'Política de cancelamento', paragraphs: ['As condições de cancelamento dependem do hotel, tour, transporte ou tarifa contratada. O usuário deve solicitar o cancelamento por escrito e revisar as condições aplicáveis antes da reserva.'] },
    { title: 'Consultas e reclamações', paragraphs: ['Consultas, alterações, cancelamentos e reclamações podem ser enviadas para reservas@aterrizaperu.com ou +51 1 616 9080. As reclamações devem ser apresentadas em até 30 dias, com descrição clara e documentos de suporte.'] },
    { title: 'Aceitação do cliente', paragraphs: ['Estas condições e os documentos entregues ao cliente formam o Contrato de Viagem. O cliente declara que conhece e aceita seu conteúdo.'] },
    { title: 'Redes sociais', paragraphs: ['O site pode conter links para redes sociais administradas pela AGL GROUP SAC. São canais informativos, e a AGL GROUP SAC não se responsabiliza por conteúdo de terceiros ou uso indevido desses sites.'] },
  ],
};

@Component({
  selector: 'app-terms',
  standalone: true,
  templateUrl: './terms.html'
})
export class Terms {
  protected readonly i18n = inject(TranslationService);

  protected readonly sections = computed(() => termsContent[this.i18n.language()]);

}
