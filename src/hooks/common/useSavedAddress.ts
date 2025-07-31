/* eslint-disable react-hooks/exhaustive-deps */
// External libraries
import { useEffect, useState } from 'react';

// Database
import { getAllAddresses } from '../../database/address';

// Contexts
import { useSnackbar } from '../../contexts/SnackbarContext';

// Interfaces
import { AddressItem } from '../../interfaces/AddressProps';

export const useSavedAddresses = (shouldReload: boolean) => {
  const [savedAddresses, setSavedAddresses] = useState<AddressItem[]>([]);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const items = await getAllAddresses();
        const formatted = items.map((address: any) => ({
          title: `${address.streetName}, ${address.number}, ${address.neighborhood}, ${address.city} - ${address.state}, ${address.cep}`,
        }));
        setSavedAddresses(formatted);
      } catch (err) {
        showSnackbar('Falha ao mostrar endereços.');
      }
    };

    fetchAddresses();
  }, [shouldReload]);

  return savedAddresses;
};
