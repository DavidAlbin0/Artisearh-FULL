import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import React from 'react';

const ARTISTON = gql`
query obtenerPostsClick($artista: ID!) {
    obtenerPostsClick(artista: $artista) {
      id
      artista
      titulo
      descripcion
      imagen
      fechaPublicacion
      ubicacion
    }
  }
`;

const ArtistProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  // Esperar a que router esté listo
  if (!router.isReady || !id) {
    return <p>Cargando perfil...</p>;
  }

  const { loading, error, data } = useQuery(ARTISTON, {
    variables: { id },
  });

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error al cargar los datos del artista.</p>;

  if (!data?.obtenerArtistaClick) {
    return <p>No se encontraron datos para el artista.</p>;
  }

  const artista = data.obtenerArtistaClick;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {artista.nombre} {artista.apellidoP}
      </h1>
      <p className="text-gray-600 italic mb-4">{artista.especialidad}</p>
      <p className="mb-4">{artista.descripcion}</p>
      <div className="mt-6 space-y-2 text-gray-700">
        <p><strong>Género:</strong> {artista.genero}</p>
        <p><strong>Email:</strong> {artista.email}</p>
        <p><strong>Teléfono:</strong> {artista.telefono}</p>
        <p><strong>Ubicación:</strong> {artista.ubicacion}</p>
      </div>
    </div>
  );
};

export default ArtistProfile;
