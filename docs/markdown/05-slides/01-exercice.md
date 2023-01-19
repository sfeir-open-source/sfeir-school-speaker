<!-- .slide: class="transition-bg-sfeir-3"-->

# CAS PRATIQUE

## Mon Pire talk technique © Chet Haase


Notes:
On va maintenant faire un talk Horrible :) Merci Chet Haase pour l’idée et la trame !

Pendant la prez, ne pas regarder le public mais juste l'écran

##==##

<!-- .slide: class="transition-bg-sfeir-3"-->

# Talk ICI


Notes:
Penser à prendre le pain pour chouchou ce soir


##==##
<!-- .slide: -->

<br><br><br><br>

# L'importance des nombres premiers dans l'informatique et comment on peut optimiser nos algorithmes pour savoir si un nombre des premier ou pas


Nantes le 15 juillet 2018 <!--.element: class="center" --><br>

Jean-François Garreau : Director Engineering Sfeir Nantes <!--.element: class="center" -->


##==##
<!-- .slide:-->

# Jean-François Garreau

* Mutiples diplômes
  * Bac S spé Math
  * DEUG MIAS
  * SIRL
  * Bafa
  * SB
  * GDE 
  * MTS
* Travaillé pour beaucoup de société en informatique
* Travaillé en tant qu’ingénieur web dans beaucoup de société
* J’aime jongler
* J’ai parlé dans beaucoup de conférence

Notes:
MTS = Mozilla Tech Speaker

##==##
<!-- .slide:-->

# Agenda


* Titre
* Présentation du speaker
* Agenda
* Introduction
* Des nombres premiers
* Formules
* Du code
* La conclusion
* Questions


##==##
<!-- .slide:-->

# Agenda


* ~~Titre~~
* Présentation du speaker
* Agenda
* Introduction
* Des nombres premiers
* Formules
* Du code
* La conclusion
* Questions


##==##
<!-- .slide:-->

# Agenda


* ~~Titre~~
* ~~Présentation du speaker~~
* Agenda
* Introduction
* Des nombres premiers
* Formules
* Du code
* La conclusion
* Questions


##==##
<!-- .slide:-->

# Agenda


* ~~Titre~~
* ~~Présentation du speaker~~
* ~~Agenda~~
* Introduction
* Des nombres premiers
* Formules
* Du code
* La conclusion
* Questions


##==##
<!-- .slide:-->

# Introduction : Pourquoi nous devons nous intéresser à cette problématique compliquée

<br>

* L’objectif de cette présentation est de revenir sur l'importance des nombres premiers
* Pour rappel un nombre premier est un nombre dont le reste de la division par lui et 1 et uniquement par ces chiffres est 0. 1 exclu
* En effet, ils sont souvent utilisés pour les calculs de crytpograhie
* Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension des nombres premiers

Notes:
Ne pas regarder les participants

##==##
<!-- .slide:-->

# Agenda


* ~~Titre~~ 
* ~~Présentation du speaker~~
* ~~Agenda~~
* ~~Introduction~~
* Des nombres premiers
* Formules
* Du code
* La conclusion
* Questions


##==##
<!-- .slide:-->

# Des nombres premiers !


![full-center h-900](./assets/images/first-1000-prime-numbers-thumb.png)

Notes: 
Ici on voit très bien les 1000 premiers nombres premiers c'est important comme information !!

##==##
<!-- .slide:-->

# Des statistiques de nombres


![full-center h-800](./assets/images/distribution-chiffres.avif)

Notes: 
Très très important de constater cette répartition de nombres surtout si on parle de nombres premiers.

##==##
<!-- .slide: data-state="hide-notification-event"-->

# Agenda


* ~~Titre~~
* ~~Présentation du speaker~~
* ~~Agenda~~
* ~~Introduction~~
* ~~Des nombres premiers~~
* Formules
* Du code
* La conclusion
* Questions


##==##
<!-- .slide:  data-state="show-notification-event"-->

# Une formule triviale


![full-center h-500](./assets/images/generation-nb-premiers.svg)

Notes:
Lire les notes sur ce slide !!

Pour connaitre le Nième nombre premier, il suffit d'ajouter à 1 la somme des en allant de 1 à n au carré le chiffre n divisé par la somme des cosinus entre 1 et i précédement donné donc du cosinus du factoriel de (j-1) + 1 divisé par j le tout multiplié par Pi qu'on met au carré. Cette division est ensuite mise à la puissance 1/n

Il s'agit du théorème de Wilson créé en 1964



##==##
<!-- .slide: class="two-column" data-state="hide-notification-event"-->

# Le saviez-vous ?

Il existe des nombres probablement premiers qui permettent de calculer si un nombre peut être considéré comme premier.

N est probablement premier sur une base B si :


<blockquote><cite>N>1 et B^(N-1)%N ==1 </cite></blockquote>

Notes: 
Alors là c'est facile ! 

ça sert en fait pour éviter de partir sur des calculs trop longs ou complexes surtout en crypto où on va chercher à avoir des grands chiffres premiers et donc on aura besoin d'avoir une méthode de calcul plus rapide

##--##

<br><br>

![h-500](./assets/images/g3a864e7b0c_0_125.png)

##==##
<!-- .slide: data-state="hide-notification-event"-->

# Agenda


* ~~Titre~~
* ~~Présentation du speaker~~
* ~~Agenda~~
* ~~Introduction~~
* ~~Des nombres premiers~~
* ~~Formules~~
* Du code
* La conclusion
* Questions


##==##
<!-- .slide: class="with-code"-->

# Un slide de code qui compile car c’est important


```java
package com.sfeir.school.speaker;

import java.lang.Math;

public class ProbablePrimeClassMain {

	public static void main(String[] args) {
		
		int nbr = 17;
		ProbablePrimeClass instance = new ProbablePrimeClass();
		int result = instance.isWeakProbablePrime(nbr, 10);
		
		if(result == 1)
			System.out.println(nbr + " is a probable prime");
		else
			System.out.println(nbr + " is not a probable prime");
	}

}

public class ProbablePrimeClass {

	public ProbablePrimeClass(){
	}

	public boolean isWeakProbablePrime(int n, int base) {
		boolean result = modularExponentiation(base, n - 1, n) == 1;

  		return result;
	}


	public integer modularExponentiation(int base, int exp, int mod){
		int result = 1;
		while (exp > 0){
			if (exp %2 != 0){
				result = (result * base) % mod
			}
			exp = exp >> 1;
			base = Math.pow(base,2) % mod 
		}
		return result;
	}  
}
```


##==##
<!-- .slide:-->

# Agenda


* ~~Titre~~
* ~~Présentation du speaker~~
* ~~Agenda~~
* ~~Introduction~~
* ~~Des nombres premiers~~
* ~~Formules~~
* ~~Du code~~
* La conclusion
* Questions


##==##
<!-- .slide:-->

# Pour conclure


Pour conclure, les nombres premiers sont une chose complexe pouvant demander une très grande puissance de calcul et donc, on doit toujours manipuler ses nombres avec précautions et éventuellement faire appels à des variantes comme les nombres probablement premiers vus précédement.


##==##
<!-- .slide:-->

# Agenda


* ~~Titre~~
* ~~Présentation du speaker~~
* ~~Agenda~~
* ~~Introduction~~
* ~~Des nombres premiers~~
* ~~Formules~~
* ~~Du code~~
* ~~La conclusion~~
* Questions


##==##
<!-- .slide:-->

# C’est le moment d'interagir


<br>

Avec un peu de technologie c’est encore mieux

https://docs.google.com/forms/d/e/1FAIpQLSe30j2ELgFY8-Jwhl5EMjyQaFpePx5BBxg2o9qpFi2wi2wROg/viewform?param1=dfslmkss21&param2=sdsdfsf

<br>

![full-center](./assets/images/qrcode.png)

Notes:
Rester 2 sec

##==##

# Merci de votre attention

## Jean-François Garreau

* Titulaire d'un bac S, DEUG MIAS, Diplome SLIR, Bafa
* Contactez moi par Phax au +33666555444333


##==##

<!-- .slide: data-background="./assets/images/seriously.gif" class="transition" -->

# T'es sérieux là ?

##==##
<!-- .slide:-->

# On peut faire mieux


![full-center h-600](./assets/images/g3a864e7b0c_0_158.png)

Notes:
On va revoir tout ça ensemble pour faire mieux, vous aller m’aider



Notes speaker :
Toujours  en 2 temps, le slide qui va pas, on interroge les gens et on fait mieux




##==##

<!-- .slide: -->

<br><br><br><br>


# L'importance des nombres premiers dans l'informatique et comment on peut optimiser nos algorithmes pour savoir si un nombre des premier ou pas


Nantes le 15 juillet 2018 <!--.element: class="center" --><br>

Jean-François Garreau : Director Engineering Sfeir Nantes <!--.element: class="center" -->

<br>

Notes:
Le titre est beaucoup trop long, tout droit sorti d’une thèse ! Il faut que le titre soit compréhensible. REX Sujet du talk !



##==##

<br><br><br><br>

# Les nombres premiers et ses enjeux


Nantes le 31/05/22<!--.element: class="center" id="real-hour"--><br>


##==##

# Jean-François Garreau


* Mutiples diplômes
  * Bac S spé Math
  * DEUG MIAS
  * SIRL
  * Bafa
  * SB
  * GDE 
  * MTS
* Travaillé pour beaucoup de société en informatique
* Travaillé en tant qu’ingénieur web dans beaucoup de société
* J’aime jongler
* J’ai parlé dans beaucoup de conférence

Notes:
On cherche quoi là à convaincre les participants ? rien ne sert de passer 3h sur le sujet !



##==##

<!-- .slide: class="speaker-slide" data-type-show="prez" -->

# Présentation

![speaker](./assets/images/jf.jpg)
![badge](./assets/images/gde.png)

<h2> Jean-François<span> Garreau</span></h2>

### CTO front
<!-- .element: class="icon-rule icon-first" -->

### @jefbinomed
<!-- .element: class="icon-twitter icon-second" -->

![company](./assets/images/logo-sfeir-blanc.png)


Notes:
ce qui est important pour les gens : votre nom, votre boite (histoire de faire un peu de pub), un moyen de vous suivre



##==##
<!-- .slide:-->

# Agenda


* Titre
* Présentation du speaker
* Agenda
* Introduction
* Des nombres premiers
* Formules
* Du code
* La conclusion
* Questions


Notes:
à remplacer par rien du tout !!! si le menu ne plait pas, les gens ont le droit de s’en aller ?



##==##
<!-- .slide:-->

# Introduction : Pourquoi nous devons nous intéresser à cette problématique compliquée

<br>

* L’objectif de cette présentation est de revenir sur l'importance des nombres premiers
* Pour rappel un nombre premier est un nombre dont le reste de la division par lui et 1 et uniquement par ces chiffres est 0. 1 exclu
* En effet, ils sont souvent utilisés pour les calculs de crytpograhie
* Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension des nombres premiers

Notes:
Pas de bullets points, rappel, 1 bullet point = une idée et surtout il ne faut pas des pavés ! sinon les gens lisent



##==##
<!-- .slide:-->

# Pourquoi ?

<br>

* L’objectif de cette présentation est de revenir sur l'importance des nombres premiers
* Pour rappel un nombre premier est un nombre dont le reste de la division par lui et 1 et uniquement par ces chiffres est 0. 1 exclu
* En effet, ils sont souvent utilisés pour les calculs de crytpograhie
* Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension des nombres premiers


Notes:
on va réduire le texte affiché !



##==##
<!-- .slide:-->

# Pourquoi ?

<br>

* Revenir sur **l'importance** des nombres premiers
* Pour rappel un nombre premier est un nombre dont le reste de la division par lui et 1 et uniquement par ces chiffres est 0. 1 exclu
* En effet, ils sont souvent utilisés pour les calculs de crytpograhie
* Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension des nombres premiers



Notes:
on met des mots en gras, pour faire apparaître les infos principales



##==##
<!-- .slide:-->

# Pourquoi ?

<br>

* Revenir sur **l'importance** des nombres premiers
* N est premier si **N%N & N%1 == 0** et que pour eux !!
* En effet, ils sont souvent utilisés pour les calculs de crytpograhie
* Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension des nombres premiers



##==##
<!-- .slide:-->

# Pourquoi ?

<br>

* Revenir sur **l'importance** des nombres premiers
* N est premier si **N%N & N%1 == 0** et que pour eux !!
* Utile en **crytpograhie**
* Cette présentation s’adresse à toutes les personnes qui se posent des questions sur leur compréhension des nombres premiers


##==##
<!-- .slide:-->

# Pourquoi ?

<br>

* Revenir sur **l'importance** des nombres premiers
* N est premier si **N%N & N%1 == 0** et que pour eux !!
* Utile en **crytpograhie**
* Pour **qui ?**


##==##
<!-- .slide:-->

# Pourquoi ?

* Revenir sur **l'importance** des nombres premiers
* N est premier si **N%N & N%1 == 0** et que pour eux !!
* Utile en **crytpograhie**
* Pour **qui ?**
<!-- .element: class="list-fragment" -->

Notes:
avec une animation d’affichage



##==##
<!-- .slide: class="bg-white transition" -->


# Une Idée = 1 Slide



##==##
<!-- .slide: class="transition bg-pink" -->


# Pourquoi ?


Notes:
Ou alternative : 1 idée = 1 slide



##==##
<!-- .slide: class="transition"-->

# Concept important 1


Notes:
Soit juste du texte



##==##
<!-- .slide: class="transition underline bottom" data-background="./assets/images/g3a864e7b0c_0_418.png" -->

# Concept important 2


![]()

Notes:
Une image peut aider à faire passer un message





##==##
<!-- .slide: class="flex-row" data-state="hide-notification-event"-->

# Des stats importantes !


![h-500](./assets/images/first-1000-prime-numbers-thumb.png)
![h-500](./assets/images/distribution-chiffres.avif)

**On ne peut rien dégager comme information !!**<!-- .element: class="fragment"  -->

Notes:
Il faut donc soit des unitées, soit guider le participant
D'un côté, contextualiser ! De l'autre trop fouilli



##==##
<!-- .slide: data-state="show-notification-event"-->

# Une formule triviale


![full-center h-500](./assets/images/generation-nb-premiers.svg)

Notes:
En soit pourquoi pas, mais il faut guider, diviser le problème, mettre en avant les choses à highlighter

##==##
<!-- .slide: data-state="hide-notification-event"-->

# Une formule triviale


![full-center h-500](./assets/images/generation-nb-premiers-1.svg)

Notes:
En soit pourquoi pas, mais il faut guider, diviser le problème, mettre en avant les choses à highlighter

##==##
<!-- .slide:-->

# Une formule triviale


![full-center h-500](./assets/images/generation-nb-premiers-2.svg)

Notes:
En soit pourquoi pas, mais il faut guider, diviser le problème, mettre en avant les choses à highlighter

##==##
<!-- .slide:-->

# Une formule triviale


![full-center h-500](./assets/images/generation-nb-premiers-3.svg)

Notes:
En soit pourquoi pas, mais il faut guider, diviser le problème, mettre en avant les choses à highlighter

##==##
<!-- .slide:-->

# Une formule triviale


![full-center h-500](./assets/images/generation-nb-premiers-4.svg)

Notes:
En soit pourquoi pas, mais il faut guider, diviser le problème, mettre en avant les choses à highlighter

##==##
<!-- .slide:-->

# Une formule triviale


![full-center h-500](./assets/images/generation-nb-premiers-5.svg)

Notes:
En soit pourquoi pas, mais il faut guider, diviser le problème, mettre en avant les choses à highlighter


##==##
<!-- .slide:-->

# Une formule triviale


![full-center h-500](./assets/images/generation-nb-premiers.svg)

Notes:
En soit pourquoi pas, mais il faut guider, diviser le problème, mettre en avant les choses à highlighter

##==##
<!-- .slide: class="two-column" data-state="hide-notification-event"-->

# Le saviez-vous ?

Il existe des nombres probablement premiers qui permettent de calculer si un nombre peut être considéré comme premier.

N est probablement premier sur une base B si :


<blockquote><cite>N>1 et B^(N-1)%N ==1 </cite></blockquote>

Notes: 
Alors là c'est facile ! 

La théorie, c'est quand on sait tout et que rien ne fonctionne. La pratique, c'est quand tout fonctionne et que personne ne sait pourquoi. Ici, nous avons réuni théorie et pratique : Rien ne fonctionne... et personne ne sait pourquoi !

Trivial non ?

##--##

<br><br>

![h-500](./assets/images/g3a864e7b0c_0_125.png)

##==##
<!-- .slide:-->

# Le saviez-vous ?


* Il existe des nombres **probables premiers**
* Calculé de la manière suivante : 
<!-- .element: class="list-fragment" -->

> b^n-1 % n = 1
<!-- .element: class="fragment" -->


Notes:
Plutôt que d’avoir de longues phrase que l’on va paraphraser, il ne faut pas hésiter à mettre juste des mots clés

##==##

<!-- .slide:-->

# Le saviez-vous ? (Logique !)



![h-500 center](./assets/images/g3a864e7b0c_0_125.png)


Notes:
Plutôt que d’avoir de longues phrase que l’on va paraphraser, il ne faut pas hésiter à mettre juste des mots clés



##==##
<!-- .slide: class="with-code"-->

# Un slide de code qui compile car c’est important


```java
package com.sfeir.school.speaker;

import java.lang.Math;

public class ProbablePrimeClassMain {

	public static void main(String[] args) {
		
		int nbr = 17;
		ProbablePrimeClass instance = new ProbablePrimeClass();
		int result = instance.isWeakProbablePrime(nbr, 10);
		
		if(result == 1)
			System.out.println(nbr + " is a probable prime");
		else
			System.out.println(nbr + " is not a probable prime");
	}

}

public class ProbablePrimeClass {

	public ProbablePrimeClass(){
	}

	public boolean isWeakProbablePrime(int n, int base) {
		boolean result = modularExponentiation(base, n - 1, n) == 1;

  		return result;
	}


	public integer modularExponentiation(int base, int exp, int mod){
		int result = 1;
		while (exp > 0){
			if (exp %2 != 0){
				result = (result * base) % mod
			}
			exp = exp >> 1;
			base = Math.pow(base,2) % mod 
		}
		return result;
	}  
}
```


Notes:
un slide de code ne doit pas compiler !!! on doit faire passer des messages !



##==##
<!-- .slide: class="with-code max-height"-->

# WeakProbalePrime.java

```java
public integer modularExponentiation(int base, int exp, int mod){
	int result = 1;
	
	
	
	
	
	
	return result;
}  
```
<!-- .element: class="big-code " -->

Notes:
c’est mieux si on guide l’attention du participant



##==##
<!-- .slide: class="with-code max-height"-->

# WeakProbalePrime.java

```
public integer modularExponentiation(int base, int exp, int mod){
	int result = 1;
	while (exp > 0){
		if (exp %2 != 0)
			result = (result * base) % mod
		
	
	}
	return result;
}  
```
<!-- .element: class="big-code" -->


##==##
<!-- .slide: class="with-code max-height"-->

# WeakProbalePrime.java

```
public integer modularExponentiation(int base, int exp, int mod){
	int result = 1;
	while (exp > 0){
		if (exp %2 != 0)
			result = (result * base) % mod
		exp = exp >> 1;
		base = Math.pow(base,2) % mod 
	}
	return result;
}  
```
<!-- .element: class="big-code" -->



##==##
<!-- .slide: class="with-code max-height"-->

# WeakProbalePrime.java

```[1-2,10-11|3-5,8|6-7|1-10]
public integer modularExponentiation(int base, int exp, int mod){
	int result = 1;
	while (exp > 0){
		if (exp %2 != 0)
			result = (result * base) % mod
		exp = exp >> 1;
		base = Math.pow(base,2) % mod 
	}
	return result;
}  
```
<!-- .element: class="big-code" -->


##==##
<!-- .slide: data-background="./assets/images/g3a83c5854a_0_6.png"-->


Notes:
le plus important c’est le focus !!! c’est le conseil numéro 1



##==##
<!-- .slide: data-background="black"-->

##==##
<!-- .slide:-->

# Pour conclure


Pour conclure, les nombres premiers sont une chose complexe pouvant demander une très grande puissance de calcul et donc, on doit toujours manipuler ses nombres avec précautions et éventuellement faire appels à des variantes comme les nombres probablement premiers vus précédement.


Notes:
le pavé ne sert pas à grand chose sur scène



##==##
<!-- .slide: data-background="./assets/images/g3a864e7b0c_0_411.png"-->


Notes:
Une image vaut mieux parfois que du texte afin de poser sa conclusion

##==##
<!-- .slide: data-background="black"-->

Notes:
Conclusion bis

##==##
<!-- .slide:-->

# C’est le moment d'interagir

https://docs.google.com/forms/d/e/1FAIpQLSe30j2ELgFY8-Jwhl5EMjyQaFpePx5BBxg2o9qpFi2wi2wROg/viewform?param1=dfslmkss21&param2=sdsdfsf

<br>

Avec un peu de technologie c’est encore mieux

<br>

![full-center](./assets/images/qrcode.png)


##==##

<!-- .slide: class="speaker-slide" -->

# Merci de votre attention


![speaker](./assets/images/jf.jpg)

<h2> Jean-François<span> Garreau</span></h2>

### @jefbinomed
<!-- .element: class="icon-twitter icon-second" -->

![company](./assets/images/logo-sfeir-blanc.png)

<a style="color:white" href="https://url-slides">https://url-slides</a>

Notes:
Un rappel de son twitter, l’url des slides, faire en sorte d’ouvrir la discussion avant tout !


##==##

<!-- .slide: data-background="./assets/images/g3e2b341858_0_0.png"-->

<h1 class="bandeau block">J’ai fini<br>mes slides !</h1>


Notes:
vient l’heure de la répet et de jouer ma prez

##==##

<!-- .slide: data-background="#fcec00" class="a-vous"-->

![full-width-screen bottom](./assets/images/g3d67955561_0_107.png)


# A VOUS !
<!-- .element: class="top" -->


<h1 class="fragment bandeau block">-10 Slides<br>
-1 Intro<br>
-1 Conclusion<br>
</h1>
