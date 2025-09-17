import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Title not shown in UI but kept for compatibility */
  title = 'Foodgo';

  /** Active category chip */
  activeChip: 'all' | 'combos' | 'sliders' | 'classic' = 'all';

  /** Cards data (from static HTML mapped into a model) */
  cards = [
    {
      image: 'assets/figmaimages/figma_image_1_83.png',
      alt: "Cheeseburger Wendy's Burger",
      title: "Cheeseburger Wendy's Burger",
      rating: '4.9',
      liked: false,
      shadowClass: 'ellipse'
    },
    {
      image: 'assets/figmaimages/figma_image_1_92.png',
      alt: 'Hamburger Veggie Burger',
      title: 'Hamburger<br>Veggie Burger',
      rating: '4.8',
      liked: false,
      shadowClass: 'ellipse'
    },
    {
      image: 'assets/figmaimages/figma_image_1_101.png',
      alt: 'Hamburger Chicken Burger',
      title: 'Hamburger<br>Chicken Burger',
      rating: '4.6',
      liked: false,
      shadowClass: 'ellipse-lg'
    },
    {
      image: 'assets/figmaimages/figma_image_1_110.png',
      alt: 'Hamburger Fried Chicken Burger',
      title: 'Hamburger<br>Fried Chicken Burger',
      rating: '4.5',
      liked: false,
      shadowClass: 'ellipse'
    }
  ];

  // PUBLIC_INTERFACE
  setActiveChip(chip: 'all' | 'combos' | 'sliders' | 'classic'): void {
    /** Sets the active category and updates chip styles via bindings. */
    this.activeChip = chip;
  }

  // PUBLIC_INTERFACE
  toggleLike(card: { liked: boolean }, event: { stopPropagation: () => void }): void {
    /** Toggles liked state for a card; stop propagation to avoid side effects. */
    event.stopPropagation();
    card.liked = !card.liked;
  }
}
