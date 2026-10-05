export interface ApologyConfig {
  recipientName: string;
  senderName: string;
  nickname: string;
  relationshipTitle: string;
  reasons: {
    title: string;
    description: string;
    icon: string;
    tag: string;
  }[];
  coupons: {
    id: string;
    title: string;
    subtitle: string;
    emoji: string;
    code: string;
    validity: string;
  }[];
}

export const apologyData: ApologyConfig = {
  recipientName: "Radhu",
  senderName: "Sujde",
  nickname: "Radhu",
  relationshipTitle: "The Queen of My Heart",
  reasons: [
    {
      title: "Your Bright, Radiant Smile",
      description: "Seeing you happy lights up my entire universe. Whenever I make you upset, it physically hurts knowing I took that sparkle away.",
      icon: "Sparkles",
      tag: "Pure Sunshine",
    },
    {
      title: "The Way You Care & Love",
      description: "You have the most tender, gentle heart in this world. You always look out for me, and you deserve that same gentle care returned a hundred times over.",
      icon: "HeartHandshake",
      tag: "Warmest Soul",
    },
    {
      title: "Our Sweet Inside Jokes",
      description: "From our silly nicknames to late-night laughs where our stomachs hurt, our bond is the most precious thing in my life.",
      icon: "Laugh",
      tag: "My Best Friend",
    },
    {
      title: "You Are Irreplaceable",
      description: "Nobody in this whole world understands me, grounds me, and inspires me like you do. I never take us for granted.",
      icon: "Crown",
      tag: "Forever & Always",
    },
  ],
  coupons: [
    {
      id: "coupon-1",
      title: "Favorite Food / Boba Date",
      subtitle: "Any place, any time, fully paid with unlimited snacks & dessert!",
      emoji: "🧋",
      code: "TREAT-QUEEN-01",
      validity: "Never Expires • Redeemable Anytime",
    },
    {
      id: "coupon-2",
      title: "1x Queen For The Whole Day",
      subtitle: "I do all chores, massage your shoulders, bring snacks, and you make all the rules!",
      emoji: "👑",
      code: "ROYAL-PASS-24H",
      validity: "Instant Unlimited Pass",
    },
    {
      id: "coupon-3",
      title: "Infinite Warm Hugs & Cuddles",
      subtitle: "Non-stop bear hugs, cozy blanket fort, and your favorite movie lineup.",
      emoji: "🧸",
      code: "CUDDLE-HEAL-100",
      validity: "Lifetime Guarantee",
    },
  ],
};
