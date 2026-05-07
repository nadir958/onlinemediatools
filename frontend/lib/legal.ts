import type { Locale } from '@/lib/i18n';
import { absoluteUrl } from '@/lib/seo';

export type LegalPageKey = 'privacy-policy' | 'terms' | 'about' | 'contact';

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
}

const LEGAL_COPY: Record<Locale, Record<LegalPageKey, LegalPageContent>> = {
  en: {
    'privacy-policy': {
      title: 'Privacy Policy',
      description: 'How OnlineMediaTools handles uploads, analytics, cookies, and personal data.',
      intro: 'This Privacy Policy explains what data we process when you use OnlineMediaTools, why we process it, and how long we keep it.',
      sections: [
        {
          title: 'Files you upload',
          paragraphs: [
            'When you use a tool, the service processes the file you upload only to complete the requested task, such as converting a format, extracting audio, generating subtitles, or cleaning audio.',
            'Uploaded files and generated outputs are automatically deleted after approximately 2 hours unless a shorter retention period is required for technical reasons or abuse prevention.',
          ],
        },
        {
          title: 'Analytics and cookies',
          paragraphs: [
            'We use Google Analytics only after you grant analytics consent through the site’s cookie controls. Analytics helps us understand which pages, tools, and calls to action are working so we can improve the service.',
            'When advertising is enabled in the future, we may also use Google AdSense and a Google-certified consent management platform to collect and manage the consent signals required for ads and measurement in applicable regions.',
          ],
        },
        {
          title: 'Log data and abuse prevention',
          paragraphs: [
            'The service may temporarily process technical data such as IP address, browser details, request metadata, and upload characteristics to secure the platform, prevent abuse, enforce file limits, and diagnose errors.',
            'We do not sell your uploaded content or use your media files to train public AI models.',
          ],
        },
        {
          title: 'Your choices',
          paragraphs: [
            'You can decline analytics cookies and reopen cookie preferences from the footer at any time.',
            'If you need a privacy-related request handled, use the contact details on the Contact page and include enough information for us to identify the issue.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      description: 'Rules for using OnlineMediaTools and your responsibilities when uploading media.',
      intro: 'By using OnlineMediaTools, you agree to use the service lawfully and only with media you own or are authorized to process.',
      sections: [
        {
          title: 'Acceptable use',
          paragraphs: [
            'You must not upload illegal content, malware, copyrighted material without authorization, or files intended to disrupt, overload, or abuse the service.',
            'You remain responsible for the legality of your uploads, outputs, and how you use the processed files.',
          ],
        },
        {
          title: 'Service availability',
          paragraphs: [
            'We may add, remove, limit, or update tools, file limits, supported formats, or processing methods at any time to maintain reliability and security.',
            'The service is provided on an as-is basis and we do not guarantee uninterrupted availability, perfect output quality, or suitability for every workflow.',
          ],
        },
        {
          title: 'Intellectual property and liability',
          paragraphs: [
            'OnlineMediaTools and its site content remain our property except for user-uploaded content, which remains yours or your licensors’ property.',
            'To the maximum extent allowed by law, we are not liable for indirect, incidental, or consequential losses resulting from use of the service.',
          ],
        },
      ],
    },
    about: {
      title: 'About OnlineMediaTools',
      description: 'What OnlineMediaTools is, who it is for, and how the site is designed to work.',
      intro: 'OnlineMediaTools is a focused suite of online video, audio, and AI-assisted media utilities built for simple browser-based workflows.',
      sections: [
        {
          title: 'What the site does',
          paragraphs: [
            'The platform helps users convert formats, compress media, extract or remove audio, trim clips, generate transcripts, create subtitles, and translate subtitle output without installing local software.',
            'The goal is to keep common media tasks fast, lightweight, and accessible from any modern browser.',
          ],
        },
        {
          title: 'How the service is designed',
          paragraphs: [
            'We focus on direct task completion: upload, process, download. We also try to keep the interface readable, multilingual, and transparent about file handling.',
            'Where possible, we publish supported formats, expected output formats, privacy expectations, and relevant workflow notes on each tool page.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: 'How to reach OnlineMediaTools for support, privacy, or business questions.',
      intro: 'Use the details below for support, policy, privacy, or advertising-related questions.',
      sections: [
        {
          title: 'Support and policy contact',
          paragraphs: [
            'For general support, privacy questions, or copyright concerns, contact: support@onlinemediatools.cc',
            'For business or advertising-related requests, contact: hello@onlinemediatools.cc',
          ],
        },
        {
          title: 'What to include',
          paragraphs: [
            'Include the page URL, the tool you used, the approximate time of the issue, and any relevant file format details so we can investigate more efficiently.',
            'Do not email sensitive media files unless absolutely necessary. If a file is required for debugging, request instructions first.',
          ],
        },
      ],
    },
  },
  fr: {
    'privacy-policy': {
      title: 'Politique de confidentialité',
      description: 'Comment OnlineMediaTools traite les fichiers envoyés, l’analytics, les cookies et les données personnelles.',
      intro: 'Cette politique de confidentialité explique quelles données nous traitons lorsque vous utilisez OnlineMediaTools, pourquoi nous les traitons et combien de temps nous les conservons.',
      sections: [
        {
          title: 'Fichiers envoyés',
          paragraphs: [
            'Lorsque vous utilisez un outil, le service traite le fichier envoyé uniquement pour accomplir la tâche demandée, par exemple convertir un format, extraire un audio, générer des sous-titres ou nettoyer un son.',
            'Les fichiers envoyés et les sorties générées sont supprimés automatiquement après environ 2 heures, sauf si une durée plus courte est nécessaire pour des raisons techniques ou de prévention des abus.',
          ],
        },
        {
          title: 'Analytics et cookies',
          paragraphs: [
            'Nous utilisons Google Analytics uniquement après votre consentement analytics via les contrôles cookies du site. L’analytics nous aide à comprendre quelles pages, quels outils et quels appels à l’action fonctionnent afin d’améliorer le service.',
            'Lorsque la publicité sera activée à l’avenir, nous pourrons aussi utiliser Google AdSense et une plateforme de gestion du consentement certifiée par Google pour recueillir et gérer les signaux de consentement requis pour les annonces et la mesure dans les régions concernées.',
          ],
        },
        {
          title: 'Journaux techniques et prévention des abus',
          paragraphs: [
            'Le service peut traiter temporairement des données techniques comme l’adresse IP, le navigateur, les métadonnées de requête et les caractéristiques d’upload afin de sécuriser la plateforme, prévenir les abus, appliquer les limites de fichiers et diagnostiquer les erreurs.',
            'Nous ne vendons pas vos contenus envoyés et n’utilisons pas vos médias pour entraîner des modèles publics d’IA.',
          ],
        },
        {
          title: 'Vos choix',
          paragraphs: [
            'Vous pouvez refuser les cookies analytics et rouvrir les préférences cookies à tout moment depuis le footer.',
            'Si vous avez une demande liée à la confidentialité, utilisez les coordonnées de la page Contact en fournissant suffisamment d’informations pour identifier le sujet.',
          ],
        },
      ],
    },
    terms: {
      title: 'Conditions d’utilisation',
      description: 'Règles d’utilisation d’OnlineMediaTools et responsabilités lors de l’envoi de médias.',
      intro: 'En utilisant OnlineMediaTools, vous acceptez d’utiliser le service légalement et uniquement avec des médias que vous possédez ou que vous êtes autorisé à traiter.',
      sections: [
        {
          title: 'Utilisation autorisée',
          paragraphs: [
            'Vous ne devez pas envoyer de contenu illégal, de malware, de contenu protégé sans autorisation, ni de fichiers destinés à perturber, surcharger ou détourner le service.',
            'Vous restez responsable de la légalité de vos envois, des fichiers générés et de l’usage qui en est fait.',
          ],
        },
        {
          title: 'Disponibilité du service',
          paragraphs: [
            'Nous pouvons ajouter, retirer, limiter ou modifier les outils, limites de fichiers, formats pris en charge ou méthodes de traitement à tout moment afin de maintenir la fiabilité et la sécurité.',
            'Le service est fourni en l’état et nous ne garantissons pas une disponibilité ininterrompue, une qualité parfaite de sortie ni une adéquation à tous les usages.',
          ],
        },
        {
          title: 'Propriété intellectuelle et responsabilité',
          paragraphs: [
            'OnlineMediaTools et les contenus du site nous appartiennent, sauf les contenus envoyés par les utilisateurs, qui restent votre propriété ou celle de vos ayants droit.',
            'Dans la mesure permise par la loi, nous ne sommes pas responsables des pertes indirectes, incidentes ou consécutives liées à l’utilisation du service.',
          ],
        },
      ],
    },
    about: {
      title: 'À propos d’OnlineMediaTools',
      description: 'Ce qu’est OnlineMediaTools, à qui il s’adresse et comment le site est conçu.',
      intro: 'OnlineMediaTools est une suite ciblée d’outils en ligne pour la vidéo, l’audio et certains traitements média assistés par IA, conçue pour des workflows simples dans le navigateur.',
      sections: [
        {
          title: 'Ce que fait le site',
          paragraphs: [
            'La plateforme aide à convertir des formats, compresser des médias, extraire ou supprimer l’audio, couper des clips, générer des transcriptions, créer des sous-titres et traduire des sous-titres sans installer de logiciel local.',
            'L’objectif est de garder les tâches média courantes rapides, légères et accessibles depuis n’importe quel navigateur moderne.',
          ],
        },
        {
          title: 'Comment le service est pensé',
          paragraphs: [
            'Nous nous concentrons sur l’exécution directe de la tâche : envoyer, traiter, télécharger. Nous essayons aussi de garder une interface lisible, multilingue et transparente sur la gestion des fichiers.',
            'Lorsque c’est possible, nous indiquons sur chaque page les formats pris en charge, les formats de sortie, les règles de confidentialité et les notes utiles de workflow.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: 'Comment joindre OnlineMediaTools pour le support, la confidentialité ou les questions commerciales.',
      intro: 'Utilisez les coordonnées ci-dessous pour les questions de support, de politique, de confidentialité ou de publicité.',
      sections: [
        {
          title: 'Support et politique',
          paragraphs: [
            'Pour le support général, les questions de confidentialité ou les demandes liées au copyright : support@onlinemediatools.cc',
            'Pour les demandes business ou publicitaires : hello@onlinemediatools.cc',
          ],
        },
        {
          title: 'Informations utiles à fournir',
          paragraphs: [
            'Indiquez l’URL de la page, l’outil utilisé, l’heure approximative du problème et les détails utiles sur le format de fichier pour faciliter l’analyse.',
            'N’envoyez pas de médias sensibles par e-mail sauf nécessité absolue. Si un fichier est requis pour le diagnostic, demandez d’abord les instructions.',
          ],
        },
      ],
    },
  },
  es: {
    'privacy-policy': {
      title: 'Política de privacidad',
      description: 'Cómo OnlineMediaTools trata archivos subidos, analytics, cookies y datos personales.',
      intro: 'Esta Política de privacidad explica qué datos tratamos cuando usas OnlineMediaTools, por qué los tratamos y durante cuánto tiempo los conservamos.',
      sections: [
        {
          title: 'Archivos que subes',
          paragraphs: [
            'Cuando usas una herramienta, el servicio procesa el archivo subido únicamente para completar la tarea solicitada, por ejemplo convertir un formato, extraer audio, generar subtítulos o limpiar audio.',
            'Los archivos subidos y los resultados generados se eliminan automáticamente después de aproximadamente 2 horas, salvo que se requiera un plazo menor por razones técnicas o de prevención de abuso.',
          ],
        },
        {
          title: 'Analytics y cookies',
          paragraphs: [
            'Usamos Google Analytics solo después de que otorgues consentimiento de analytics mediante los controles de cookies del sitio. Analytics nos ayuda a entender qué páginas, herramientas y llamadas a la acción funcionan mejor para mejorar el servicio.',
            'Cuando la publicidad se active en el futuro, también podremos usar Google AdSense y una plataforma de gestión del consentimiento certificada por Google para recopilar y gestionar las señales de consentimiento requeridas para anuncios y medición en las regiones aplicables.',
          ],
        },
        {
          title: 'Registros técnicos y prevención de abuso',
          paragraphs: [
            'El servicio puede procesar temporalmente datos técnicos como dirección IP, navegador, metadatos de petición y características de subida para proteger la plataforma, prevenir abusos, aplicar límites de archivo y diagnosticar errores.',
            'No vendemos tu contenido subido ni usamos tus archivos multimedia para entrenar modelos públicos de IA.',
          ],
        },
        {
          title: 'Tus opciones',
          paragraphs: [
            'Puedes rechazar las cookies de analytics y volver a abrir las preferencias de cookies en cualquier momento desde el footer.',
            'Si necesitas hacer una solicitud relacionada con privacidad, usa los datos de la página de Contacto e incluye suficiente información para identificar el asunto.',
          ],
        },
      ],
    },
    terms: {
      title: 'Términos del servicio',
      description: 'Normas para usar OnlineMediaTools y tus responsabilidades al subir contenido multimedia.',
      intro: 'Al usar OnlineMediaTools, aceptas utilizar el servicio de forma legal y solo con contenido multimedia que posees o estás autorizado a procesar.',
      sections: [
        {
          title: 'Uso permitido',
          paragraphs: [
            'No debes subir contenido ilegal, malware, material con copyright sin autorización ni archivos destinados a interrumpir, sobrecargar o abusar del servicio.',
            'Sigues siendo responsable de la legalidad de tus archivos subidos, de los resultados generados y del uso que hagas de ellos.',
          ],
        },
        {
          title: 'Disponibilidad del servicio',
          paragraphs: [
            'Podemos añadir, eliminar, limitar o actualizar herramientas, límites de archivo, formatos compatibles o métodos de procesamiento en cualquier momento para mantener la fiabilidad y la seguridad.',
            'El servicio se ofrece tal cual y no garantizamos disponibilidad ininterrumpida, calidad perfecta de salida ni adecuación para todos los flujos de trabajo.',
          ],
        },
        {
          title: 'Propiedad intelectual y responsabilidad',
          paragraphs: [
            'OnlineMediaTools y el contenido del sitio siguen siendo de nuestra propiedad, excepto el contenido subido por los usuarios, que sigue siendo tuyo o de tus licenciantes.',
            'En la máxima medida permitida por la ley, no somos responsables de pérdidas indirectas, incidentales o consecuentes derivadas del uso del servicio.',
          ],
        },
      ],
    },
    about: {
      title: 'Acerca de OnlineMediaTools',
      description: 'Qué es OnlineMediaTools, para quién está pensado y cómo está diseñado el sitio.',
      intro: 'OnlineMediaTools es un conjunto enfocado de utilidades online para video, audio y tareas multimedia asistidas por IA pensado para flujos de trabajo simples en el navegador.',
      sections: [
        {
          title: 'Qué hace el sitio',
          paragraphs: [
            'La plataforma ayuda a convertir formatos, comprimir medios, extraer o eliminar audio, recortar clips, generar transcripciones, crear subtítulos y traducir subtítulos sin instalar software local.',
            'El objetivo es mantener las tareas multimedia comunes rápidas, ligeras y accesibles desde cualquier navegador moderno.',
          ],
        },
        {
          title: 'Cómo está diseñado el servicio',
          paragraphs: [
            'Nos centramos en completar la tarea de forma directa: subir, procesar y descargar. También intentamos mantener una interfaz clara, multilingüe y transparente sobre el manejo de archivos.',
            'Siempre que es posible, mostramos en cada página los formatos compatibles, el formato de salida, las expectativas de privacidad y notas útiles de flujo de trabajo.',
          ],
        },
      ],
    },
    contact: {
      title: 'Contacto',
      description: 'Cómo contactar con OnlineMediaTools para soporte, privacidad o cuestiones comerciales.',
      intro: 'Usa los datos siguientes para preguntas de soporte, políticas, privacidad o publicidad.',
      sections: [
        {
          title: 'Soporte y políticas',
          paragraphs: [
            'Para soporte general, privacidad o incidencias de copyright: support@onlinemediatools.cc',
            'Para consultas comerciales o relacionadas con publicidad: hello@onlinemediatools.cc',
          ],
        },
        {
          title: 'Qué incluir',
          paragraphs: [
            'Incluye la URL de la página, la herramienta utilizada, la hora aproximada del problema y cualquier detalle útil sobre el formato del archivo para facilitar la investigación.',
            'No envíes archivos multimedia sensibles por correo salvo que sea estrictamente necesario. Si hace falta un archivo para depuración, pide instrucciones primero.',
          ],
        },
      ],
    },
  },
};

export function getLegalPage(locale: Locale, key: LegalPageKey) {
  return LEGAL_COPY[locale][key];
}

export function buildLegalMetadata(locale: Locale, key: LegalPageKey) {
  const page = getLegalPage(locale, key);
  const path = key === 'privacy-policy' ? '/privacy-policy' : key === 'terms' ? '/terms' : key === 'about' ? '/about' : '/contact';
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: absoluteUrl(path, locale),
      languages: {
        en: absoluteUrl(path, 'en'),
        fr: absoluteUrl(path, 'fr'),
        es: absoluteUrl(path, 'es'),
        'x-default': absoluteUrl(path, 'en'),
      },
    },
  };
}
