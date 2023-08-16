class Motion {
  slideIn(direction, type, delay, duration) {
    return {
      hidden: {
        x: direction === "right" ? "200%" : direction === "left" ? "-200%" : 0,
        y: direction === "up" ? "200%" : direction === "down" ? "-200%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
        },
      },
    };
  }

  fadeIn(direction, type, delay, duration) {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
        },
      },
    };
  }

  textVariants(delay) {
    return {
      hidden: {
        y: 50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay,
        },
      },
    };
  }

  textVariants(delay) {
    return {
      hidden: {
        y: 50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay,
        },
      },
    };
  }
}

export const Motions = new Motion();