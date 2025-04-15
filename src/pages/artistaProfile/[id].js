import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const OBTENER_ARTISTA_CLICK = gql`
  query obtenerArtistaClick($id: ID!) {
    obtenerArtistaClick(id: $id) {
      id
      nombre
      apellidoP
      genero
      email
      telefono
      ubicacion
      descripcion
      especialidad
    }
  }
`;

const OBTENER_POST_CLICK = gql`
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

const ArtistaProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p className="text-center text-gray-500">Loading...</p>;

  const { loading, error, data } = useQuery(OBTENER_ARTISTA_CLICK, {
    variables: { id },
    skip: !id,
  });

  const {
    data: postsData,
    loading: postsLoading,
    error: postsError,
  } = useQuery(OBTENER_POST_CLICK, {
    variables: { artista: id },
    skip: !id,
  });

  if (loading || postsLoading)
    return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  if (postsError)
    return (
      <p className="text-center text-red-500">
        Error loading posts: {postsError.message}
      </p>
    );

  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-600 min-h-screen py-6">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
        <div className="flex items-center space-x-4">
          <div
            className="w-24 h-24 bg-cover rounded-full shadow-lg"
            style={{
              backgroundImage: `url('https://via.placeholder.com/150')`,
            }}
          />
          <div>
            <h1 className="text-5xl font-extrabold text-orange-600 mb-2">
              {data.obtenerArtistaClick.nombre}
            </h1>
            <p className="text-lg text-orange-600">
              {data.obtenerArtistaClick.especialidad}
            </p>
          </div>
        </div>

        <div className="mt-6 text-gray-800 space-y-4">
          <p>
            <span className="font-semibold">Apellido:</span>{" "}
            {data.obtenerArtistaClick.apellidoP}
          </p>
          <p>
            <span className="font-semibold">Género:</span>{" "}
            {data.obtenerArtistaClick.genero}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {data.obtenerArtistaClick.email}
          </p>
          <p>
            <span className="font-semibold">Teléfono:</span>{" "}
            {data.obtenerArtistaClick.telefono}
          </p>
          <p>
            <span className="font-semibold">Ubicación:</span>{" "}
            {data.obtenerArtistaClick.ubicacion || "No disponible"}
          </p>
          <p>
            <span className="font-semibold">Descripción:</span>{" "}
            {data.obtenerArtistaClick.descripcion || "No disponible"}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-orange-600 mb-4">
            Posts del Artista
          </h2>
          {postsData.obtenerPostsClick.length === 0 ? (
            <p className="text-center text-gray-500">
              No hay posts disponibles
            </p>
          ) : (
            <div className="space-y-6">
              {postsData.obtenerPostsClick.map((post) => (
                <div
                  key={post.id}
                  className="bg-orange-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {post.titulo}
                  </h3>
                  {post.imagen && (
                    <img
                      src={post.imagen}
                      alt={post.titulo}
                      className="mt-4 w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  )}
                  <p className="mt-4 text-gray-700">{post.descripcion}</p>
                  <p className="mt-2 text-gray-500 text-sm">
                    Publicado el{" "}
                    {new Date(post.fechaPublicacion).toLocaleDateString()}
                  </p>
                  <p className="mt-1 text-gray-500 text-sm">
                    Ubicación: {post.ubicacion || "No disponible"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => alert("Iniciando chat...")} // Aquí puedes poner la función que manejará el inicio del chat
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none"
          >
            Iniciar Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistaProfile;
