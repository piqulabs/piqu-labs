export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const REVEAL_TRANSITION = {
  duration: 0.5,
  ease: MOTION_EASE,
};

export const VIEWPORT = {
  once: true,
  margin: "-80px",
} as const;

export const STAGGER_CHILDREN_DELAY = 0.08;
export const HERO_STAGGER_DELAY = 0.1;

export const CARD_HOVER_TRANSITION = {
  duration: 0.2,
  ease: MOTION_EASE,
};

export const PORTFOLIO_HOVER_TRANSITION = {
  duration: 0.3,
  ease: MOTION_EASE,
};
