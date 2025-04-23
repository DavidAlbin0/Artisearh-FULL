import Head from "next/head";
import Layout from "../../components/layout";
import { useQuery, gql } from "@apollo/client";
import React, { useState } from "react";
import { useRouter } from "next/router";

// Consulta para obtener todas las publicaciones
const QUERY = gql`
  query obtenerPostAll {
    obtenerPostAll {
      id
      artista
      imagen
      descripcion
      ubicacion
    }
  }
`;

// Consulta para obtener un artista por ID
const ARTISTA = gql`
  query obtenerArtistaClick($id: ID!) {
    obtenerArtistaClick(id: $id) {
      id
      nombreArtistico
      nombre
      apellidoP
      apellidoM
      genero
      email
      telefono
      ubicacion
      descripcion
      especialidad
    }
  }
`;

// Subcomponente que busca y muestra el nombre del artista
const ArtistaNombre = ({ id }) => {
  const { data, loading, error } = useQuery(ARTISTA, {
    variables: { id },
  });

  if (loading)
    return <p className="text-sm text-gray-400">Cargando artista...</p>;
  if (error)
    return <p className="text-sm text-red-500">Error al cargar artista</p>;

  return (
    <p className="text-sm text-gray-500 mt-1 italic">
      {data.obtenerArtistaClick.nombre} {data.obtenerArtistaClick.apellidoP}
    </p>
  );
};

export const index = () => {
  const { data, loading, error } = useQuery(QUERY);
  const [selectedPost, setSelectedPost] = useState(null); // Modal control
  const router = useRouter();

  if (loading)
    return (
      <p className="text-center text-blue-500 mt-6">
        Cargando publicaciones...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 mt-6">
        Error al cargar publicaciones: {error.message}
      </p>
    );

  return (
    <Layout>
      <Head>
        <title>Publicaciones</title>
      </Head>

      <h1 className="text-3xl font-bold text-center text-gray-800 mt-6 mb-4">
        Publicaciones
      </h1>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {data.obtenerPostAll.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={`data:image/jpeg;base64,${post.imagen}`}
              alt={post.descripcion}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <ArtistaNombre id={post.artista} />
            <h3 className="text-xl font-semibold text-gray-700">
              {post.descripcion}
            </h3>
            <p className="text-gray-600 truncate">{post.descripcion}</p>
            <p className="text-sm text-gray-500 mt-1 italic">
              {post.ubicacion}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-lg">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow transition-all"
              onClick={() => {
                router.push(`/artistaProfile/${selectedPost.artista}`);
              }}
            >
              👤 Ver perfil
            </button>

            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
              onClick={() => setSelectedPost(null)}
            >
              &times;
            </button>
            <img
              src={`data:image/jpeg;base64,${selectedPost.imagen}`}
              alt={selectedPost.descripcion}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedPost.descripcion}
            </h2>
            <p className="text-gray-700 mb-2">{selectedPost.descripcion}</p>
            <p className="text-sm text-gray-500 italic">
              {selectedPost.ubicacion}
            </p>

            <div className="mt-4 flex justify-end">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-full shadow transition-all">
                ❤️ Me gusta
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default index;
