(function () {
  "use strict";

  var storageKey = "jc-lang";
  var root = document.documentElement;
  var supported = ["en", "pt"];

  // English is the source of truth and lives in the HTML. Only Portuguese
  // strings are stored here; switching back to English restores the cached
  // original markup, so there is no duplicate English dictionary to maintain.
  var pt = {
    // Shared chrome
    "skip": "Ir para o conteúdo",
    "nav.presentation": "Apresentação",
    "nav.works": "Trabalhos",
    "nav.teaching": "Ensino",
    "nav.diagrams": "Diagramas",
    "nav.contact": "Contato",
    "nav.donation": "Doação",

    // Home
    "title.index": "Joubert Cavalcante | Economia",
    "idx.eyebrow": "Mestrando em Economia",
    "idx.subtitle": "Sou mestrando em economia, com forte interesse em teoria econômica, instituições e economia política. Reúno aqui minhas anotações de estudo, materiais didáticos e uma biblioteca de diagramas, à medida que aprendo.",
    "idx.act.works": "Ver trabalhos",
    "idx.act.teaching": "Material didático",
    "idx.act.diagrams": "Diagramas",
    "idx.act.contact": "Contato",
    "idx.act.donation": "Doação",
    "idx.label.presentation": "Apresentação",
    "idx.h2": "Teoria econômica, instituições e economia política.",
    "idx.lead": "Interesso-me por como instituições, incentivos e interação estratégica moldam decisões coletivas, e uso este site para organizar o que estudo e compartilhar com outras pessoas.",
    "idx.fine": "Aqui você encontra anotações de estudo, diagramas interativos e material de aprendizado em teoria econômica, economia política e teoria dos jogos — um trabalho em andamento que cresce junto comigo.",
    "idx.card.interests": "Interesses",
    "idx.interest.pe": "Economia Política",
    "idx.interest.gt": "Teoria dos Jogos",
    "idx.interest.inst": "Instituições e Escolha Coletiva",
    "idx.interest.elect": "Política Eleitoral",
    "idx.interest.strat": "Comportamento Estratégico",
    "idx.card.tools": "Ferramentas",
    "idx.tool.model": "Modelagem formal",
    "idx.tool.gt": "Análise por teoria dos jogos",
    "idx.tool.sim": "Simulações computacionais",
    "idx.tool.data": "Análise e visualização de dados",
    "idx.tool.code": "Python / R para pesquisa em ciências sociais",
    "idx.card.notes": "Anotações",
    "idx.notes.p": "Anotações e guias de estudo em teoria econômica que escrevo enquanto aprendo, e compartilho caso ajudem outras pessoas.",
    "idx.card.diagrams": "Diagramas",
    "idx.diagrams.p": "Uma biblioteca dedicada de diagramas interativos abrangendo microeconomia, macroeconomia e econometria.",
    "idx.footer": "&copy; <span>2026</span> Joubert Cavalcante. Feito para o GitHub Pages.",

    // Works
    "title.works": "Trabalhos | Joubert Cavalcante",
    "wk.eyebrow": "Trabalhos",
    "wk.h1": "Artigos, projetos e notas de pesquisa.",
    "wk.motto": "Uma seleção da minha pesquisa em andamento e concluída.",
    "wk.label": "Seleção",
    "wk.h2": "Pesquisa",
    "wk.lead": "Artigos em elaboração, submissões, projetos de dados e replicação, notas técnicas e textos de divulgação.",
    "wk.k.paper": "Artigo em elaboração",
    "wk.k.project": "Projeto",
    "wk.k.note": "Nota",
    "wk.p1": "Um arcabouço não paramétrico para testar estacionariedade espacial quando choques institucionais são não observados, baseado em comparações contrafactuais. Manuscrito atualmente em avaliação.",
    "wk.tag.review": "Em avaliação",
    "wk.tag.paper": "Artigo em elaboração",
    "wk.tag.spatial": "Estacionariedade espacial",
    "wk.tag.counter": "Contrafactuais não paramétricos",
    "wk.h3.project": "Projeto de pesquisa ou base de dados",
    "wk.p.project": "Um projeto de dados ou replicação — código, documentação e resultados reproduzíveis.",
    "wk.tag.data": "Dados",
    "wk.tag.repl": "Replicação",
    "wk.h3.note": "Ensaio, artigo ou nota técnica",
    "wk.p.note": "Textos mais curtos — um ensaio, artigo expositivo ou nota técnica sobre um tema em economia.",
    "wk.tag.notes": "Notas",
    "wk.tag.ext": "Link externo",

    // Teaching
    "title.teaching": "Ensino | Joubert Cavalcante",
    "tc.eyebrow": "Ensino",
    "tc.h1": "Cursos e trilhas de estudo.",
    "tc.motto": "Libera sit scientia.",
    "tc.act.grad": "Pós-graduação",
    "tc.act.anpec": "ANPEC",
    "tc.label.grad": "Pós-graduação",
    "tc.h2.grad": "Notas de aula para a pós-graduação",
    "tc.lead.grad": "Notas autocontidas em teoria econômica e seus fundamentos matemáticos, escritas para levar o leitor dos primeiros princípios até resultados de nível de pesquisa.",
    "tc.kicker.lecture": "Notas de aula",
    "tc.badge.soon": "Em breve",
    "tc.book.ra": "Análise Real: para Economistas",
    "tc.book.ra.p": "Demonstrações, sequências, topologia, continuidade, diferenciação, compacidade, otimização e os fundamentos matemáticos para economistas.",
    "tc.book.prob": "Probabilidade e Inferência Estatística",
    "tc.book.prob.p": "Probabilidade, estimação, testes de hipóteses, distribuições, ideias assintóticas e fundamentos para a econometria.",
    "tc.book.micro": "Teoria Microeconômica",
    "tc.book.micro.p": "Escolha, teoria do consumidor e do produtor, equilíbrio, bem-estar, jogos, informação e estrutura de mercado.",
    "tc.book.gt": "Teoria dos Jogos",
    "tc.book.gt.p": "Jogos na forma estratégica, conceitos de equilíbrio, jogos dinâmicos, jogos repetidos, informação e aplicações.",
    "tc.book.pe": "Economia Política",
    "tc.book.pe.p": "Escolha coletiva, instituições, votação, redistribuição, agência política e modelos de formação de políticas.",
    "tc.label.anpec": "ANPEC",
    "tc.h2.anpec": "Preparação para a ANPEC",
    "tc.lead.anpec": "Notas de estudo para o exame de admissão à pós-graduação em economia (ANPEC), organizadas por disciplina.",
    "tc.kicker.anpec": "Notas ANPEC",
    "tc.anpec.math": "Matemática",
    "tc.anpec.math.p": "Cálculo, álgebra linear, otimização, sequências, sistemas e rotinas de resolução de problemas para a ANPEC.",
    "tc.anpec.micro": "Microeconomia",
    "tc.anpec.micro.p": "Teoria do consumidor, teoria da firma, equilíbrio, bem-estar, incerteza e interação estratégica.",
    "tc.anpec.macro": "Macroeconomia",
    "tc.anpec.macro.p": "Crescimento, economia monetária, IS-LM, economia aberta, inflação, expectativas e debates de política.",
    "tc.anpec.stat": "Estatística",
    "tc.anpec.stat.p": "Probabilidade, distribuições, estimação, testes de hipóteses, regressão e interpretação.",

    // Diagrams
    "title.diagrams": "Diagramas | Joubert Cavalcante",
    "dg.eyebrow": "Diagramas",
    "dg.h1": "Bibliotecas de diagramas.",
    "dg.motto": "Libera sit scientia.",
    "dg.label": "Bibliotecas",
    "dg.h2": "Coleções de diagramas",
    "dg.lead": "Diagramas interativos, no navegador, que constroem passo a passo os principais resultados de cada área. Escolha uma biblioteca para começar.",
    "dg.card.ra": "Análise Real para Economistas",
    "dg.card.ra.p": "Lógica, conjuntos, números reais, topologia, diferenciação, otimização, pontos fixos, convexidade, medida e equilíbrio.",
    "dg.card.prob": "Probabilidade e Inferência Estatística",
    "dg.card.prob.p": "Medida, variáveis aleatórias, integração, momentos, distribuições, assintótica, estimação, testes, inferência bayesiana e fundamentos da econometria.",
    "dg.card.micro": "Microeconomia",
    "dg.card.micro.p": "Demanda do consumidor, teoria do produtor, mercados competitivos, poder de mercado, teoria dos jogos, bem-estar, informação e escolha intertemporal.",
    "dg.card.macro": "Macroeconomia",
    "dg.card.macro.p": "Mensuração, moeda, IS-LM, AS-AD, curvas de Phillips, microfundamentos, crescimento, economia aberta, política fiscal e dinâmica da dívida.",

    // Contact
    "title.contact": "Contato | Joubert Cavalcante",
    "ct.eyebrow": "Contato",
    "ct.h1": "Contato e links acadêmicos.",
    "ct.label": "Links",
    "ct.h2": "Entre em contato",
    "ct.lead": "Para correspondência acadêmica, colaborações ou dúvidas sobre os materiais deste site, o e-mail é a melhor forma de me encontrar. Você também pode me encontrar pelos links abaixo.",
    "ct.email": "E-mail <span>joubert.cavalcante@ufpe.br</span>",

    // Donation
    "title.donation": "Doação | Joubert Cavalcante",
    "dn.eyebrow": "Doação",
    "dn.h1": "Apoie notas de aula e diagramas abertos.",
    "dn.subtitle": "Todos os materiais deste site são de uso livre. As contribuições ajudam a mantê-los assim — financiando novas notas de aula, melhores diagramas e mais recursos didáticos.",
    "dn.label": "Apoio",
    "dn.h2": "Formas de contribuir",
    "dn.lead": "Qualquer valor é bem-vindo, e não há obrigação alguma — o material continua aberto de qualquer forma.",
    "dn.pix.copy": "Copiar chave Pix",
    "dn.paypal": "PayPal ou Stripe",
    "dn.paypal.link": "Abrir link de doação",
    "dn.other": "Outras formas de apoio",
    "dn.other.p": "Para livros, bolsas, colaborações ou apoio institucional, entre em contato e encontramos a melhor forma.",
    "dn.other.contact": "Contato",

    // 404
    "title.404": "Página não encontrada | Joubert Cavalcante",
    "nf.eyebrow": "Erro 404",
    "nf.h1": "Página não encontrada.",
    "nf.subtitle": "A página que você procura pode ter sido movida, renomeada ou nunca ter existido.",
    "nf.act.home": "Voltar ao início",
    "nf.act.diagrams": "Ver diagramas",
    "nf.act.teaching": "Material didático"
  };

  var dict = { pt: pt };

  function preferredLang() {
    var saved = localStorage.getItem(storageKey);
    if (supported.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || "en").toLowerCase();
    return browser.indexOf("pt") === 0 ? "pt" : "en";
  }

  function cacheOriginals() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.dataset.i18nOriginal === undefined) el.dataset.i18nOriginal = el.innerHTML;
    });
  }

  // Label shown on the theme toggle, in the active language. Follows theme.js
  // semantics: the button advertises the theme it will switch TO.
  var themeLabels = {
    en: { dark: "Light", light: "Dark" },
    pt: { dark: "Claro", light: "Escuro" }
  };

  function currentLang() {
    return root.getAttribute("lang") === "pt" ? "pt" : "en";
  }

  // Exposed so theme.js can localize its label the moment the theme changes.
  window.jcThemeLabel = function (theme) {
    var lang = currentLang();
    return themeLabels[lang][theme === "dark" ? "dark" : "light"];
  };

  function applyThemeLabel() {
    var theme = root.dataset.theme === "dark" ? "dark" : "light";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.textContent = window.jcThemeLabel(theme);
    });
  }

  function applyLang(lang) {
    root.setAttribute("lang", lang);
    var t = dict[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.dataset.i18n;
      if (t && t[key] !== undefined) {
        el.innerHTML = t[key];
      } else if (el.dataset.i18nOriginal !== undefined) {
        el.innerHTML = el.dataset.i18nOriginal;
      }
    });

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.textContent = lang === "pt" ? "EN" : "PT";
      button.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Mudar para português");
      button.setAttribute("aria-pressed", lang === "pt" ? "true" : "false");
    });

    applyThemeLabel();
  }

  cacheOriginals();
  applyLang(preferredLang());

  document.addEventListener("DOMContentLoaded", function () {
    cacheOriginals();
    applyLang(preferredLang());
    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        var next = currentLang() === "pt" ? "en" : "pt";
        localStorage.setItem(storageKey, next);
        applyLang(next);
      });
    });
  });

  // Keep the theme label localized when the theme is toggled.
  document.addEventListener("jc:themechange", applyThemeLabel);
})();
