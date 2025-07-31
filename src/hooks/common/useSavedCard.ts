/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

// Database
import { getAllCards } from '../../database/card';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Interfaces
import { SavedCardProps } from '../../interfaces/CardProps';

// Assets
import CardIcon from '../../assets/icons/Card';

export const useSavedCards = (shouldReload: boolean) => {
  const [savedCards, setSavedCards] = useState<SavedCardProps[]>([]);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await getAllCards();
        const formatted = cards.map((card: any) => {
          const lastFour = card.cardNumber?.slice(-4) ?? '0000';
          return {
            title: `${card.nickname} - •••• •••• •••• ${lastFour}`,
            image: CardIcon,
          };
        });

        setSavedCards(formatted);
      } catch (err) {
        showSnackbar('Falha ao mostrar cartões.');
      }
    };

    fetchCards();
  }, [shouldReload]);

  return savedCards;
};
