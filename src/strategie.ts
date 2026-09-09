/** SECTION 5 - Extracteurs
import { ciseaux, Joueur, roche, Round, papier, Action, IdJoueur, Contexte, Strategie } from "./rps.js";

// Extracteurs
export function dernierRound(contexte: Contexte): Round | null {
  return contexte.historique.length > 0 ? contexte.historique[contexte.historique.length - 1] : null;
}

export function derniereActionJoueur(joueur: IdJoueur, contexte: Contexte): Action | null {
  const round = dernierRound(contexte);
  return (joueur === "j1" ? round?.actionJoueur1 : round?.actionJoueur2) ?? null;
}

export function derniereActionAdversaire(contexte: Contexte): Action | null {
  return derniereActionJoueur(contexte.moi === "j1" ? "j2" : "j1", contexte);
}

export function pointage(joueur: IdJoueur, contexte: Contexte) {
  return joueur === "j1" ? contexte.pointage.joueur1 : contexte.pointage.joueur2;
}

export function monPointage(contexte: Contexte): number {
  // À faire
}

export function pointageAdversaire(contexte: Contexte): number {
  // À faire
}
*/

/** SECTION 6 - Utilitaires
export function contre(action: Action): Action {
  // À faire
  // Cette fonction prend une action et retourne l'action qui bat (contre) l'action reçue.
}

export function repeter(repetition: number, action: Action): Action[] {
  return new Array(repetition).fill(action);
}

export function combiner(seq1: Action[], seq2: Action[]): Action[] {
  // À faire
  // Combiner les deux séquences d'actions (ne pas modifier les collections reçues)
}
*/

/** SECTION 7 - Prédicats
export function estNul(contexte: Contexte): boolean {
  return monPointage(contexte) === pointageAdversaire(contexte);
}

export function estGagnant(contexte: Contexte): boolean {
  return monPointage(contexte) > pointageAdversaire(contexte);
}

export function estPerdant(contexte: Contexte): boolean {
  return monPointage(contexte) < pointageAdversaire(contexte);
}
*/

// Stratégies
/**
 * Stratégie qui retourne toujours la même action
 * @param action action sélectionnée
 * @returns une stratégie qui retourne toujours la même action
 */
/**
export function constant(action: Action): Strategie {
  // À faire
*/

/**
 * Stratégie qui retourne la dernière action de l'adversaire (ou defaut si c'est le premier round)
 * @param defaut action pour le premier round
 * @returns une stratégie qui copie la dernière action de l'adversaire
 */
/**
export function miroir(defaut: Action): Strategie {
  // À faire
}
*/

/**
 * Stratégie qui contre une stratégie
 * @param strategie stratégie à contrer
 * @returns Stratégie qui contre la stratégie
 */
/**
export function inverse(strategie: Strategie): Strategie {
  // À faire
}
*/

/**
 * Stratégie qui exécute une séquence d'actions en boucle
 * @param sequence sequence d'actions à exécuter en boucle
 * @returns Stratégie qui exécute une séquence d'actions en boucle
 */
/**
export function enBoucle(sequence: Action[]): Strategie {
  return (contexte: Contexte) => sequence[contexte.historique.length % sequence.length];
}
*/

/**
 * Une stratégie qui vérifie un prédicat et choisit la stratégie à utiliser en conséquence
 * @param predicat détermine si la condition est vraie ou fausse
 * @param alors stratégie à utiliser si la condition est vraie
 * @param sinon stratégie à utiliser si la condition est fausse
 * @returns Une stratégie qui vérifie un prédicat et choisit la stratégie à utiliser en conséquence
 */
/**
export function si(predicat: (contexte: Contexte) => boolean, alors: Strategie, sinon: Strategie): Strategie {
    // À faire
}
*/
