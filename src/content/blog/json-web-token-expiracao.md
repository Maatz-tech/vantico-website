---
title: "JSON Web Token e a importância do Tempo de Expiração"
date: "2026-03-02"
image: "/images/blog/post-9.webp"
category: "Labs"
tags: ["jwt", "labs"]
summary: "Este é um resumo do post. Seu objetivo é informar rapidamente o leitor sobre o conteúdo, facilitando a decisão de leitura."
featured: false
---

JSON Web Tokens (JWTs) tornaram-se o padrão de facto para autenticação e autorização em APIs modernas. Compostos por três partes — header, payload e signature — os JWTs permitem a troca segura de informações entre partes de forma stateless. No entanto, uma das configurações mais negligenciadas e que pode ter consequências graves para a segurança é o tempo de expiração do token, definido pelo claim "exp" no payload.

Tokens com tempo de expiração muito longo ou, pior, sem expiração alguma, representam um risco significativo. Se um JWT for comprometido por meio de XSS, interceptação de tráfego ou vazamento de logs, o atacante terá acesso válido ao sistema pelo tempo restante de vida do token. Sem um mecanismo de revogação — que JWTs por design não possuem nativamente — a única defesa é o tempo de expiração. Tokens de acesso com validade de horas ou dias dão ao atacante uma janela de oportunidade ampla para causar danos.

A recomendação é utilizar tempos de expiração curtos para access tokens (entre 5 e 15 minutos) combinados com refresh tokens de vida mais longa armazenados de forma segura. Implementar uma blacklist de tokens em cache (Redis, por exemplo) permite a revogação imediata em caso de comprometimento. Além disso, é fundamental validar sempre a assinatura e a expiração no lado do servidor, usar algoritmos seguros como RS256 ou ES256, e nunca armazenar dados sensíveis no payload do JWT. Em nossos pentests, a ausência de expiração adequada em JWTs é um achado recorrente que classificamos como vulnerabilidade de severidade média a alta.
