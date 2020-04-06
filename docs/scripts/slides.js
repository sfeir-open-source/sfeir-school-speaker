// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/01-INTRO.md',
    '00-school/speaker-jef.md',
    '00-school/02-content.md',
  ];
}

function introSlides() {
  return [
  'intro/00-TITLE.md',
  'intro/contexte.md',
  ];
}

function findASubject(){
  return[
    'find-a-subject/00-TITLE.md',
    'find-a-subject/rules.md',
    'find-a-subject/being-pertinent.md',
    'find-a-subject/exercice.md',
    'find-a-subject/got-subject.md',
  ]
}

function comm(){
  return [
    '00-school/com.md',
  ];
}

function where(){
  return[
    'where/where.md',
  ];
}

function cfp(){
  return[
    'cfp/cfp.md',
  ];
}

function slides(){
 return [
   'slides/00-slides.md',
   'slides/01-exercice.md',
 ];
}

function onStage(){
  return [
    'on-stage/repetition.md',
    'on-stage/on-stage.md',
  ]
}

function after(){
  return [
    'after/after.md',
  ]
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(), //
    ...findASubject(), //
    ...comm(), //
    ...where(), //
    ...cfp(), //
    ...slides(), //
    ...onStage(), //
    ...after(), //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
