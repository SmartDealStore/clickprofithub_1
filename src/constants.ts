import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Nova Design System v2.0',
    description: 'A collection of 150+ high-fidelity 3D assets for high-end web interfaces and dark mode applications.',
    price: 49,
    category: 'UI Kit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiJM7pjd4naA265tICt9U37lcHCwNV_XPVMO8hyU24LRWNRRMcO5g6jujKefFGucRKq3H4nG544yjyDekr-NmukN5KMqK1mtW4RcHXYP9EKyQfmNb_cQjhrKu7MAqL6cBiMaXcFjF5Gegjy4dtTKlA6FFQ2odSQhtgRtEevWQDmTiYm4_DMrjtjRrO1RgnoBgcjc6-ih1Muh2BadLHc0q3OOUaB4OCWUFYRTii2f8bmvdVhmkJFcAMIWqpkd-QPkaDJ2armX6wYk4',
    rating: 4.9,
    bestSeller: true
  },
  {
    id: '2',
    title: 'JavaScript Engine Mastery',
    description: 'The definitive guide to ethical hacking and enterprise-level defense protocols for modern developers.',
    price: 89,
    category: 'Course',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-0f7c0TAlkGX8Pv1pV55QchR9CY717PmjQiR5ygbS9EGB_tWWlXMuEcXLnDm33FUAW3CO4nLopsIVb926_zW-4WGJvB1wO4BQ4pXsSs9e25Fr1CHrTIP3I1aqsm73YVIqDdMWwOZwdIx9A-PNdK3XhZydjF7q9TnifrFV4wksBvxYqU46d-_p_u6QO5NrZNKNXd1pjUFHuvdVZOlUr-iMdVdymnGYVAI-FtlxOpcpHeZI2TnX8gjIgeuB1OQ_bUb47WauEV0JFg4',
    rating: 5.0,
    featured: true
  },
  {
    id: '3',
    title: 'Growth Hacking Playbook',
    description: 'Hand-picked digital products designed to elevate your workflow and aesthetic precision.',
    price: 24,
    category: 'E-Book',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDcIKNfGVBEMQkxa5xIo1gXTt46ziUX5ImSRzWapPYGA2UviMrJGyXq5hw3bLk4Evo6ISvkQbkxYnCN_npazEAFxGmwO4P9NFapoP6vocdr1WFN7WruDJz4_S3ZUHxctsQK93nWesNwanaKyM6THQ599stLVfEfQfFBpLaKHPbZs6lP6OPqsXQTN4k1cOWaIprliAAb-j_Fg7zDHlSaI3FmQb8bFmuN3sDhHX88kWbv8CujUSYptjSkLZew2gwPVApWGC_6mvdPxQ',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Python Automation Suite',
    description: 'Matrix-style green code falling on dark background. Automate your daily tasks with ease.',
    price: 129,
    category: 'Scripts',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJNf8QSBQNpJP9PYsipabfRu6E1mexOr1JWAK65RlfK7hr7OSRmTSPXviHx9gSUrg4k5HmTcdu0PmNDvwXHDzNFP_ah-b1AEfpxgXRee-5yNd4_WV66rA5z9901F4kzrUBFYm3kzUFvRjXLmiUXoXqiIkeWSyjL7wO1O7mmG_5fe04J7HDU5bhCmKkzAcdVrjhXZjlgj0oxAd1VZCvLE5OpTA1MB6hkkI_8ddHK__5rZTevqqFuilL4_omEYIHXGnUIwWW8xYnCaA',
    rating: 4.8
  },
  {
    id: '5',
    title: 'Neo-Glass Collection',
    description: 'Minimalist abstract digital 3D render. High-quality glass textures for your next project.',
    price: 35,
    category: '3D Asset',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjRQq0ImX-nwqUAwbvouFxKDFj1LjMeSWiCHpHpQb0byJqq_2QCjQ25iJuUHXjIaad9uR9uIjZx-n0cIo113LTkrU9uC8wb0k2_of80jKdA3RBbfGQVdJ8N1todEPXXDPE2Z88SNpxZ_C-dzOoOGUbxqHhChgaKhWz2uqHnDObs6XR6g7MvINvyC5LWDPrB-McAVMRwYPRyuvq-iMiq0D9XFwz9Dszf2S2C_lF0GnKZW36QwohgeBVvHmNn6Ss9mi9GOUMn5tE5Qc',
    rating: 4.9,
    newRelease: true
  },
  {
    id: '6',
    title: 'Vivid Gradients v2',
    description: 'Vibrant colorful gradient mesh background. 50+ Mesh gradients in 8K resolution.',
    price: 19,
    category: 'Texture Pack',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZXgJirnBupEUVEGHxGKNrdCM3UTyHrJTfexO0WjvIm-B6JIt6gQ8XTmNRzmB2uJ1-M_5kL4eqgkqC3G1QhQWhV-DunjGuJrstc1agNVmI3CTWTDuVFdaVINvB9Y-OtuKUJ315Z_GSJcx5x13FJtf8byhjapF2nhmIfD7FyH9h36TB_KUcj4WxzzriijyVbg2f3y23nv9sGLSMK9WkIAIE_6fgJ1K3DNTWqhdk7fc8g0lk2_E22RQ1siDweq59rtZe5ZiuxfEtHTo',
    rating: 4.6
  },
  {
    id: '7',
    title: 'Retro Tech Series',
    description: 'Retro aesthetic gaming hardware photography. High-resolution shots for tech lovers.',
    price: 45,
    category: 'Photography',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoGw18MvS7eMifudBupz9qAhtA38otcjiZlhNL9y8bUCUf8g24sOc7hNwUx0s2f0bcZU1FURN4wdvhmV34yWZ6ObmjJhygJ-MftpXU9eyF0Nkidlo76oIS_1a8-mlGRDNyuczGvByQ-Qr492sGh35nzCw_ZQpRyLdhaetxdAwwSzmEtKpMQfipz-enH9rs1ATh8QFZUe2v-H9fPXP6SpCg-baJfqk_rVWKlCO_OvT9A2qb9ipF_Ekj3WPWodY6FgyUjdrz_c7vAqU',
    rating: 4.8
  },
  {
    id: '8',
    title: 'Hyperion UI Suite',
    description: 'Professional Design System for Modern Creators. Meticulously curated collection of 500+ components.',
    price: 149,
    originalPrice: 299,
    category: 'UI Kit',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS5UWTmEDnIAVei6H1azGspHS48V7UpK6Wkw9ushPpxz_zh4HUJpGKXSl9ykMIKWD6i7c9yclSoXQsNFlDRUHIXZSDhs1LZ2y__w5oa8q-cUlpukDE7C6XnQIN1BC0r4-tghHspdPAjovVIkNhz3HOHjPUYU-ead4D7o0juTbFD8gUDuIzME8q4tBQeGfcGV_TJvBmrju72DGXxZAGDzaZPVGRnL7CG-OpbZfSoj6bCS0bBXEiJFZDwGyWL4VqMrLMcAz653Bet14',
    rating: 5.0,
    newRelease: true
  }
];
