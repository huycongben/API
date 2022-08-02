// axios
//   .get("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getPhotos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos");
};

// const createPhotoCard = (albumId,id,title,url,thumbnailUrl) => {
// const photoCard = document.createElement("div");
// photoCard.classList.add("photo");

// const photoAlbumId = document.createElement("div");
// photoAlbumId.classList.add("albumId");
// photoAlbumId.textContent = albumId;

//  const photoId = document.createElement("div");
//  photoId.classList.add("id");
// photoId.textContent = id;

// const photoTitle = document.createElement("div");
// photoTitle.classList.add("title");
// photoTitle.textContent = title;

// const photoUrl = document.createElement("div");
// photoUrl.classList.add("url");
// photoUrl.textContent = url;

// const photoThumbnailUrl = document.createElement("div");
// photoThumbnailUrl.classList.add("thumbnailUrl");
// photoThumbnailUrl.textContent = thumbnailUrl;

// photoCard.append(photoAlbumId , photoId , photoTitle , photoUrl , photoThumbnailUrl);
// return photoCard;
// }

const renderPhotosList = async () => {
  try {
    const { data } = await getPhotos();

    const html = data.map((photo) => {
      return `<tr>
      <td>${photo.id}</td>
      <td>${photo.title}</td>
      <td>${photo.url}</td>
      <td>${photo.thumbnailUrl}</td>
      </tr> `;
    }).join("");

    document.querySelector(".data").innerHTML = html;

    // const photos = data.map(createPhotoCard);
    // document.querySelector(".photos-list").append(...photos);
  } catch (error) {
    console.log(error);
  }
};

renderPhotosList();
