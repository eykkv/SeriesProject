async function deleteSeries(id) {
  try {
    if (true) {
      await fetch(`https://jsonserve-p8wz.onrender.com/series/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    }

    const seriesToDelete = document.getElementById(`series-${id}`);
    if (seriesToDelete) {
      seriesToDelete.remove();
    }
  } catch (error) {
    console.error("Erro ao deletar série: ", error);
  }
}
