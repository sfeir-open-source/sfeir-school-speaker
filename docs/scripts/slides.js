import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

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
  '01-intro/00-TITLE.md',
  '01-intro/01-contexte.md',
  ];
}

function findASubject(){
  return[
    '02-find-a-subject/00-TITLE.md',
    '02-find-a-subject/01-rules.md',
    '02-find-a-subject/02-being-pertinent.md',
    '02-find-a-subject/03-exercice.md',
    '02-find-a-subject/99-got-subject.md',
  ]
}

function comm(){
  return [
    '00-school/com.md',
  ];
}

function where(){
  return[
    '03-where/01-where.md',
  ];
}

function cfp(){
  return[
    '04-cfp/01-cfp.md',
  ];
}

function slides(){
 return [
   '05-slides/00-slides.md',
   '05-slides/01-exercice.md',
 ];
}

function onStage(){
  return [
    '06-on-stage/01-repetition.md',
    '06-on-stage/02-on-stage.md',
  ]
}

function after(){
  return [
    '07-after/01-after.md',
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

SfeirThemeInitializer.init(formation);
