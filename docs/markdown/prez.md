<!-- .slide: data-background="./assets/images/g15645683e6_0_6.png"-->

# CAS PRATIQUE


Notes:
On va maintenant faire un talk Horrible :) Merci Chet Haase pour l’idée et la trame !



##==##
<!-- .slide: data-background="./assets/images/g15645683e6_0_32.png"-->

La circonvolution de la planète terre dans le système solaire appliqué à la théorie des corps via des intégrales et fractales de courbes de beziers 


Nantes le 15 juillet 2018
Jean-François Garreau : Director Engineering Sfeir Nantes


##==##
<!-- .slide:-->

# Jean-François Garreau


Bac S spé Math
Diplôme d’ingénieur en informatique
Travaillé pour beaucoup de société en informatique
Travaillé en tant qu’ingénieur web dans beaucoup de société
J’ai parlé dans beaucoup de conférence
J’aime jongler


##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données 
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# Introduction : Pourquoi nous devons nous intéresser à cette problématique compliquée


L’objectif de cette présentation est de revenir sur les concepts parfois abstrait des mathématiques appliqués à l’astronomie
En effet, la complexité de compréhension fait qu’il nous au moins une présentation
Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension de l’astronomie


##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# Des stats importantes !


![](./assets/images/g3a864e7b0c_0_97.png)

##==##
<!-- .slide:-->

# D’autres statistiques


![](./assets/images/g3a864e7b0c_0_103.png)

##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# Une formule compliquée


![](./assets/images/g3a864e7b0c_0_109.png)

Notes:
Lire les notes sur ce slide !!

La limite matémathique de l’infini de 2 puissance 2 multiplié par n log 7 divissé par l’intégrale de t puissance 2 exposant dt multiplié par la somme des radians de 8 Pi divisé par la variable k le tout divisé par 2 intégrales de 0 à l’infini qui doit nous donner le résultat de 50 !



##==##
<!-- .slide:-->

# Explication d’un autre truc compliqué


Comprendre l’astronomie et les maths, ce n’est pas simple et parfois même on a du mal à comprendre pourquoi il faut que ça soit compliqué !


![](./assets/images/g3a864e7b0c_0_125.png)

##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# Un slide de code qui compile car c’est important


package com.binomed.showtime.android;

import greendroid.app.GDApplication;
import org.acra.ACRA;
import org.acra.annotation.ReportsCrashes;
import android.content.Intent;
import android.os.Build;
import com.binomed.showtime.android.cst.CineShowtimeCst;
import com.binomed.showtime.android.cst.ParamIntent;
import com.binomed.showtime.android.screen.main.CineShowTimeMainActivity;
import com.binomed.showtime.android.util.activity.TestSizeHoneyComb;
import com.binomed.showtime.android.util.activity.TestSizeOther;

@ReportsCrashes(formKey = CineShowtimeCst.ACRA_FORM_KEY)
public class CineShowTimeApplication extends GDApplication {

	@Override
	public void onCreate() {
		ACRA.init(this);
		super.onCreate();
	}

	@Override
	public Class<?> getHomeActivityClass() {
		return CineShowTimeMainActivity.class;
	}6

	@Override
	public Intent getMainApplicationIntent() {
		Intent startIntent = new Intent(getApplicationContext(), CineShowTimeMainActivity.class);
		if (Integer.valueOf(Build.VERSION.SDK) <= 10) {
			startIntent.putExtra(ParamIntent.ACTIVITY_LARGE_SCREEN, TestSizeOther.checkLargeScreen(getResources().getConfiguration().screenLayout));
		} else {
			startIntent.putExtra(ParamIntent.ACTIVITY_LARGE_SCREEN, TestSizeHoneyComb.checkLargeScreen(getResources().getConfiguration().screenLayout));
		}
		return startIntent;
	}
}


##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# Pour conclure


Pour conclure, c’est pas mal d’avoir une idée à communiquer, faire un retour ce qu’on a appris pendant la conférence et donc permettre ainsi aux gens de savoir quels étaient les points importants à retenir!


##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


##==##
<!-- .slide:-->

# C’est le moment d'interagir


Avec un peu de technologie c’est encore mieux



![](./assets/images/g3a864e7b0c_0_152.png)

##==##
<!-- .slide:-->

# On peut faire mieux


![](./assets/images/g3a864e7b0c_0_158.png)

Notes:
On va revoir tout ça ensemble pour faire mieux, vous aller m’aider



Notes speaker : 
Toujours  en 2 temps, le slide qui va pas, on interroge les gens et on fait mieux




##==##
<!-- .slide: data-background="./assets/images/g15645683e6_0_32.png"-->

La circonvolution de la planète terre dans le système solaire appliqué à la théorie des corps via des intégrales et fractales de courbes de beziers 


Nantes le 15 juillet 2018
Jean-François Garreau : Director Engineering Sfeir Nantes


Notes:


Le titre est beaucoup trop long, tout droit sorti d’une thèse ! Il faut que le titre soit compréhensible



##==##
<!-- .slide: data-background="./assets/images/g15645683e6_0_32.png"-->

Simplification des enjeux astronomiques


Nantes le 15/07/18



##==##
<!-- .slide:-->

# Jean-François Garreau


Bac S spé Math
Diplôme d’ingénieur en informatique
Travaillé pour beaucoup de société en informatique
Travaillé en tant qu’ingénieur web dans beaucoup de société
J’ai parlé dans beaucoup de conférence
J’aime jongler


Notes:
On cherche quoi là à convaincre les participants ? rien ne sert de passer 3h sur le sujet !



##==##
<!-- .slide:-->

# Présentation


JF Garreau
CTO front
@jefBinomed



![](./assets/images/masque_photo.png)

![](./assets/images/g3a864e7b0c_0_276.png)

![](./assets/images/masque_photo.png)

![](./assets/images/g3a864e7b0c_0_278.png)

![](./assets/images/g3a864e7b0c_0_279.png)

Notes:
ce qui est important pour les gens : votre nom, votre boite (histoire de faire un peu de pub), un moyen de vous suivre



##==##
<!-- .slide:-->

# Agenda


Titre
Présentation du speaker
Agenda
Introduction
Stats
Des données
Du code
La conclusion
Questions


Notes:
à remplacer par rien du tout !!! si le menu ne plait pas, les gens ont le droit de s’en aller ?



##==##
<!-- .slide:-->

# Introduction : Pourquoi nous devons nous intéresser à cette problématique compliquée


L’objectif de cette présentation est de revenir sur les concepts parfois abstrait des mathématiques appliqués à l’astronomie
En effet, la complexité de compréhension fait qu’il nous au moins une présentation
Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension de l’astronomie


Notes:
Pas de bullets points, rappel, 1 bullet point = une idée et surtout il ne faut pas des pavés ! sinon les gens lisent



##==##
<!-- .slide:-->

# Pourquoi ?


L’objectif de cette présentation est de revenir sur les concepts parfois abstrait des mathématiques appliqués à l’astronomie
En effet, la complexité de compréhension fait qu’il nous au moins une présentation
Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension de l’astronomie


Notes:
on va réduire le texte affiché !



##==##
<!-- .slide:-->

# Pourquoi ?


Revenir sur les concepts
En effet, la complexité de compréhension fait qu’il nous au moins une présentation
Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension de l’astronomie



Notes:
on met des mots en gras, pour faire apparaître les infos principales



##==##
<!-- .slide:-->

# Pourquoi ?


Revenir sur les concepts
Besoin d’une présentation
Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension de l’astronomie



##==##
<!-- .slide:-->

# Pourquoi ?


Revenir sur les concepts
Besoin d’une présentation
Pour qui ?


##==##
<!-- .slide:-->

# Pourquoi ?


Revenir sur les concepts
Besoin d’une présentation
Pour qui ?


Notes:
avec une animation d’affichage





##==##
<!-- .slide: data-background="./assets/images/g15645683e6_0_6.png"-->

# Pourquoi ?


Notes:
Ou alternative : 1 idée = 1 slide



##==##
<!-- .slide:-->

Concept important 1


Notes:
Soit juste du texte



##==##
<!-- .slide:-->

Concept important 2


![](./assets/images/g3a864e7b0c_0_418.png)

Notes:
Une image peut aider à faire passer un message





##==##
<!-- .slide:-->

# Des stats importantes !


On ne peut rien dégager comme information !!


![](./assets/images/g3a864e7b0c_0_202.png)

![](./assets/images/g3a864e7b0c_0_358.png)

Notes:
Il faut donc soit des unitées, soit guider le participant



##==##
<!-- .slide:-->

# Une formule compliquée


![](./assets/images/g3a864e7b0c_0_219.png)

Notes:
En soit pourquoi pas, mais il faut guider, diviser le problème, mettre en avant les choses à highlighter



##==##
<!-- .slide:-->

# Explication d’un autre truc compliqué


Comprendre l’astronomie et les maths, ce n’est pas simple et parfois même on a du mal à comprendre pourquoi il faut que ça soit compliqué !


![](./assets/images/g3a864e7b0c_0_225.png)

Notes:
il faut éviter le gros bloc de texte qui doit apporter de l’info



##==##
<!-- .slide:-->

# Explication d’un autre truc compliqué


Quelques mots clés suffisent


Notes:
Plutôt que d’avoir de longues phrase que l’on va paraphraser, il ne faut pas hésiter à mettre juste des mots clés



##==##
<!-- .slide:-->

# Un slide de code qui compile car c’est important


package com.binomed.showtime.android;

import greendroid.app.GDApplication;
import org.acra.ACRA;
import org.acra.annotation.ReportsCrashes;
import android.content.Intent;
import android.os.Build;
import com.binomed.showtime.android.cst.CineShowtimeCst;
import com.binomed.showtime.android.cst.ParamIntent;
import com.binomed.showtime.android.screen.main.CineShowTimeMainActivity;
import com.binomed.showtime.android.util.activity.TestSizeHoneyComb;
import com.binomed.showtime.android.util.activity.TestSizeOther;

@ReportsCrashes(formKey = CineShowtimeCst.ACRA_FORM_KEY)
public class CineShowTimeApplication extends GDApplication {

	@Override
	public void onCreate() {
		ACRA.init(this);
		super.onCreate();
	}

	@Override
	public Class<?> getHomeActivityClass() {
		return CineShowTimeMainActivity.class;
	}

	@Override
	public Intent getMainApplicationIntent() {
		Intent startIntent = new Intent(getApplicationContext(), CineShowTimeMainActivity.class);
		if (Integer.valueOf(Build.VERSION.SDK) <= 10) {
			startIntent.putExtra(ParamIntent.ACTIVITY_LARGE_SCREEN, TestSizeOther.checkLargeScreen(getResources().getConfiguration().screenLayout));
		} else {
			startIntent.putExtra(ParamIntent.ACTIVITY_LARGE_SCREEN, TestSizeHoneyComb.checkLargeScreen(getResources().getConfiguration().screenLayout));
		}
		return startIntent;
	}
}


Notes:
un slide de code ne doit pas compiler !!! on doit faire passer des messages !



##==##
<!-- .slide:-->

# CineShowTimeApplication.java


@ReportsCrashes(formKey = CineShowtimeCst.ACRA_FORM_KEY)
public class CineShowTimeApplication extends GDApplication {
  public void onCreate() {...}
  public Intent getMainApplicationIntent() {
    if (Integer.valueOf(Build.VERSION.SDK) <= 10) {
      startIntent.putExtra(ParamIntent.ACTIVITY_LARGE_SCREEN,
         TestSizeOther.checkLargeScreen(
           getResources().getConfiguration().screenLayout));
    }
		...
	}
}


Notes:
c’est mieux si on guide l’attention du participant



##==##
<!-- .slide:-->

# CineShowTimeApplication.java


@ReportsCrashes(formKey = CineShowtimeCst.ACRA_FORM_KEY)
public class CineShowTimeApplication extends GDApplication {
  public void onCreate() {...}
  public Intent getMainApplicationIntent() {
    if (Integer.valueOf(Build.VERSION.SDK) <= 10) {
      startIntent.putExtra(ParamIntent.ACTIVITY_LARGE_SCREEN,
         TestSizeOther.checkLargeScreen(
           getResources().getConfiguration().screenLayout));
    }
		...
	}
}


##==##
<!-- .slide:-->

# Pour conclure


Pour conclure, c’est pas mal d’avoir une idée à communiquer, faire un retour ce qu’on a appris pendant la conférence et donc permettre ainsi aux gens de savoir quels étaient les points importants à retenir!


Notes:
le pavé ne sert pas à grand chose sur scène



##==##
<!-- .slide:-->

![](./assets/images/g3a864e7b0c_0_411.png)

Notes:
Une image vaut mieux parfois que du texte afin de poser sa conclusion



##==##
<!-- .slide:-->

# C’est le moment d'interagir


Avec un peu de technologie c’est encore mieux



![](./assets/images/g3a864e7b0c_0_256.png)

##==##
<!-- .slide:-->

# Des Questions ?



https://l-url-de-mes-slides.com

@jefbinomed


Notes:
Un rappel de son twitter, l’url des slides, faire en sorte d’ouvrir la discussion avant tout !



##==##
<!-- .slide: data-background="./assets/images/g3e2b341858_0_0.png"-->

# J’ai fini 
mes slides !


Notes:
vient l’heure de la répet et de jouer ma prez



##==##
<!-- .slide:-->

# L’heure de la répétition a sonné


![](./assets/images/g3a864e7b0c_0_423.png)

##==##
<!-- .slide:-->

# Que vérifier ?


![](./assets/images/g3a864e7b0c_0_428.png)

![](./assets/images/g3a864e7b0c_0_429.png)

![](./assets/images/g3a864e7b0c_0_430.png)

![](./assets/images/g3a864e7b0c_0_431.png)

Notes:
Le timingSe relire pour éviter les fautes

Expérimenter, ne pas hésiter à s’intérrompre

Répéter devant des collègues




##==##
<!-- .slide:-->

# Avoir les slides en tête


![](./assets/images/g3a864e7b0c_0_437.png)

Notes:
Le plus important reste d’avoir le sujet en tête et le déroulement des slides !!



##==##
<!-- .slide:-->

# Le jour J


![](./assets/images/g3e2b346e48_0_5.png)

Notes:
vous voilà arriver au jour J !



##==##
<!-- .slide:-->

# Chauffez-vous


![](./assets/images/g3a864e7b0c_0_0.png)

Notes:
Il faut s’échauffer, faire des exercices de dictions, avoir une bouteille d’eau pour ne pas avoir la george sèche



##==##
<!-- .slide:-->

# Se lancer


![](./assets/images/g3e2b346e48_0_19.png)

Notes:
2 techniques : apprendre son intro par coeur ou alors donner une anecdote personnelle



##==##
<!-- .slide:-->

# Attention à votre image


![](./assets/images/g3e2b346e48_0_43.png)

Notes:
vous représentez votre société !! donc attention Nous ne sommes pas non plus des acteurs !!!



##==##
<!-- .slide:-->

# Posez des questions


![](./assets/images/g3e2b346e48_0_50.png)

Notes:
celà permet de resyncrhoniser le public avec soi



##==##
<!-- .slide:-->

# Osez dire : je ne sais pas


![](./assets/images/g3e2b346e48_0_57.png)

##==##
<!-- .slide:-->

# Expliquez ce que vous faites


![](./assets/images/g3e2b346e48_0_64.png)

Notes:
ne laissez pas le public dans le flou, il ne voient pas ce que vous faites, donc expliquez le



##==##
<!-- .slide:-->

# Ayez un plan B


![](./assets/images/g3e2b346e48_0_71.png)

Notes:
la démo ne marchera jamais donc penser à plan B, la vidéo est souvent un bon plan B ;)



##==##
<!-- .slide: data-background="./assets/images/g3e2b346e48_0_72.png"-->

# J’ai donné
ma conf !


Notes:
Cool, ça c’est bien passé, maintenant on fait quoi ?



##==##
<!-- .slide:-->

Publier sa prez


# Publiez votre présentation


![](./assets/images/g3a864e7b0c_0_440.png)

##==##
<!-- .slide:-->

# Ou publier ?


Sur les réseaux Sociaux


Sur des sites dédiés


![](./assets/images/g3a864e7b0c_0_448.png)

![](./assets/images/g3a864e7b0c_0_451.png)

![](./assets/images/g3a864e7b0c_0_452.png)

![](./assets/images/g3a864e7b0c_0_453.png)

Notes:
SlideShare / SpeakerDeck / Github Pages / ...



##==##
<!-- .slide:-->

# Sachez marquer des points


![](./assets/images/g3e3083f2f8_0_3.png)

##==##
<!-- .slide:-->

En local ou pas ;)


![](./assets/images/g3e3083f2f8_0_8.png)

Notes:
Ne pas se limiter qu’à sa ville ! aller parler dans une autre ville montre quitte même à organiser un tour de france ?



##==##
<!-- .slide:-->

# Réseaux sociaux


![](./assets/images/g3e3083f2f8_0_16.png)

Notes:
Soyez présent sur les réseaux sociaux, ayez du contenu de qualité



##==##
<!-- .slide:-->

# Blog


![](./assets/images/g3e3083f2f8_1_8.png)

Notes:
Ayez éventuellement un blog, aujourd’hui Medium vous permet d’avoir une présence facile. Attention au ROI



##==##
<!-- .slide:-->

# Développez votre réseau


![](./assets/images/g3e3083f2f8_3_0.png)

Notes:
Discutez avec les conférenciers, discutez avec les organisateurs, c’est le meilleur moyen de continuer à progresser



##==##
<!-- .slide:-->

# Axes d’amélioration


![](./assets/images/g3e3083f2f8_3_7.png)

Notes:
Travailler ses slides

Répéter

Travailler son intro ...



##==##
<!-- .slide: data-background="./assets/images/g3e3083f2f8_3_14.png"-->

A VOUS !


# -1 Idée

-1 Action


Notes:
Maintenant c’est leur prendre les post-its  et d’écrire une action que vous aller faire dans les 3 prochains mois



##==##
<!-- .slide:-->

![](./assets/images/g3a864e7b0c_0_454.png)

Notes:
Voici venu l’heure des questions



