import React, { useState, useEffect } from "react"; 

 

export default function AnimeTracker() { 

  const [shows, setShows] = useState([]); 

  const [newTitle, setNewTitle] = useState(""); 

  const [newImage, setNewImage] = useState(""); 

  const [newEpisodes, setNewEpisodes] = useState(""); 

  const [newNotes, setNewNotes] = useState(""); 

 

  useEffect(() => { 

    const saved = JSON.parse(localStorage.getItem("animeShows")) || []; 

    setShows(saved); 

  }, []); 

 

  useEffect(() => { 

    localStorage.setItem("animeShows", JSON.stringify(shows)); 

  }, [shows]); 

 
  // Separate sections 

  const watchedShows = shows.filter((show) => show.seen); 

  const watchingShows = shows.filter( 

    (show) => show.watchedEpisodes > 0 && show.watchedEpisodes < show.totalEpisodes && !show.seen 

  ); 

  const unwatchedShows = shows.filter( 

    (show) => show.watchedEpisodes === 0 && !show.seen 

  ); 

 

  // Functions 

  function addShow() { 

    if (!newTitle || !newEpisodes) return; 

    setShows([ 

      ...shows, 

      { 

        id: Date.now(), 

        title: newTitle, 

        image: newImage || "https://via.placeholder.com/150", 

        totalEpisodes: parseInt(newEpisodes), 

        watchedEpisodes: 0, 

        seen: false, 

        rating: 0, 

        notes: newNotes, 

      }, 

    ]); 

    setNewTitle(""); setNewImage(""); setNewEpisodes(""); setNewNotes(""); 

  } 

 

  function updateWatchedEpisodes(id, amount) { 

    setShows( 

      shows.map((show) => { 

        if (show.id === id) { 

          const newWatched = Math.max(0, Math.min(show.totalEpisodes, show.watchedEpisodes + amount)); 

          return { ...show, watchedEpisodes: newWatched }; 

        } 

        return show; 

      }) 

    ); 

  } 

 

  function toggleSeen(id) { 

    setShows(shows.map((show) => show.id === id ? { ...show, seen: !show.seen } : show)); 

  } 

 

  function deleteShow(id) { 

    setShows(shows.filter((show) => show.id !== id)); 

  } 

 

  function updateRating(id, value) { 

    setShows(shows.map((show) => show.id === id ? { ...show, rating: value } : show)); 

  } 

 

  function updateNotes(id, text) { 

    setShows(shows.map((show) => show.id === id ? { ...show, notes: text } : show)); 

  } 

  // Styles

  const styles = { 

    container: {
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         minHeight: "100vh",
         width: "100vw",
         padding: "20px",
         backgroundColor: "#fafafa",
         fontFamily: "sans-serif" ,
         color: "#333" }, 

    backButton: {
         padding: "8px 16px",
         marginBottom: "15px",
         border: "none",
         borderRadius: "10px",
         backgroundColor: "#8fbf9f",
         color: "#fff",
         cursor: "pointer",
         transition: "all 0.3s ease" }, 

    title: {
         color: "#8fbf9f",
         marginBottom: "20px" }, 

    form: {
         marginBottom: "25px",
         display: "flex",
         flexDirection: "column",
         alignItems: "center" }, 

    input: {
         padding: "10px",
         margin: "5px",
         borderRadius: "10px",
         border: "1px solid #8fbf9f",
         backgroundColor: "#fff",
         color: "#333",
         maxWidth: "300px" }, 

    addButton: {
         padding: "10px 18px",
         backgroundColor: "#f4a6b8",
         color: "#fff",
         border: "none",
         borderRadius: "10px", 
         cursor: "pointer",
         marginTop: "10px",
         transition: "all 0.3s ease" }, 

    dashboard: {
         width: "95%",
         maxWidth: "1200px",
         padding: "20px",
         borderRadius: "15px",
         marginBottom: "20px",
         boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
         color: "#333",
         background: "linear-gradient(135deg, #f4a6b8, #8fbf9f)" }, 

    dashboardTitle: {
         marginBottom: "12px",
         color: "#fff" }, 

    overallProgressBar: {
         width: "100%",
         height: "14px",
         backgroundColor: "#ccc",
         borderRadius: "7px",
         marginTop: "6px" }, 

    overallProgressFill: {
         height: "100%",
         backgroundColor: "#333",
         borderRadius: "7px",
         transition: "width 0.5s ease" }, 

    sectionTitle: {
         marginTop: "35px",
         marginBottom: "12px",
         color: "#8fbf9f" }, 

    grid: {
         display: "grid",
         gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
         gap: "22px",
         width: "95%", 
         maxWidth: "1200px", 
         justifyItems: "center" }, 

    card: { 
        background: "linear-gradient(135deg, #3b3b3b, #2d2d3b)", 
        padding: "18px", 
        borderRadius: "15px", 
        boxShadow: "0 6px 15px rgba(0,0,0,0.25)", 
        color: "#fff", 
        width: "100%", 
        maxWidth: "260px" }, 

    image: { 
        width: "100%", 
        borderRadius: "10px", 
        marginBottom: "12px" }, 

    episodes: { 
        fontSize: "14px", 
        marginBottom: "6px" }, 

    progressBar: { 
        width: "100%", 
        height: "10px", 
        backgroundColor: "#555", 
        borderRadius: "5px", 
        marginTop: "6px" }, 

    progressFill: { 
        height: "100%", 
        backgroundColor: "#f4a6b8", 
        borderRadius: "5px", 
        transition: "width 0.5s ease" }, 

    progressButton: { 
        marginTop: "10px", 
        marginRight: "5px", 
        padding: "5px 12px", 
        border: "none", 
        borderRadius: "7px", 
        backgroundColor: "#8fbf9f", 
        color: "white", 
        ursor: "pointer", 
        transition: "all 0.3s ease" }, 

    unseenButton: { 
        marginTop: "10px", 
        padding: "8px", 
        backgroundColor: "#8fbf9f", 
        border: "none", 
        borderRadius: "10px", 
        cursor: "pointer", 
        color: "#fff", 
        transition: "all 0.3s ease" }, 

    deleteButton: { 
        marginTop: "10px", 
        marginRight: "5px", 
        padding: "5px 12px", 
        border: "none", 
        borderRadius: "7px", 
        backgroundColor: "#e74c3c", 
        color: "#fff", 
        cursor: "pointer", 
        transition: "all 0.3s ease" }, 

    starButton: { 
        background: "none", 
        border: "none", 
        color: "#ffd700", 
        cursor: "pointer", 
        fontSize: "18px" }, 

    notesInput: { 
        width: "100%", 
        marginTop: "6px", 
        padding: "6px", 
        borderRadius: "7px", 
        border: "1px solid #ccc" }, 

  }; 

  return ( 

    <div style={styles.container}> 

      <button style={styles.backButton} onClick={() => window.history.back()}>← Back to Projects</button> 

      <h1 style={styles.title}>Anime Tracker</h1> 

      {/* Dashboard */} 

      <div style={styles.dashboard}> 

        <h2 style={styles.dashboardTitle}>Summary</h2> 

        <p>Total Shows: {shows.length}</p> 

        <p>Watched: {watchedShows.length}</p> 

        <p>Watching: {watchingShows.length}</p> 

        <p>Unwatched: {unwatchedShows.length}</p> 

        <p> 

          Overall Progress:{" "} 

          {shows.length > 0 

            ? Math.round( 

                (shows.reduce((acc, s) => acc + s.watchedEpisodes, 0) / 

                  shows.reduce((acc, s) => acc + s.totalEpisodes, 0)) * 

                  100 

              ) 

            : 0} 

          % 

        </p> 

        <div style={styles.overallProgressBar}> 

          <div 

            style={{ 

              ...styles.overallProgressFill, 

              width: 

                shows.length > 0 

                  ? `${(shows.reduce((acc, s) => acc + s.watchedEpisodes, 0) / 

                      shows.reduce((acc, s) => acc + s.totalEpisodes, 0)) * 

                    100}%` 

                  : "0%", 

            }} 

          /> 

        </div> 

      </div> 

      {/* Form */} 

      <div style={styles.form}> 

        <input style={styles.input} placeholder="Anime Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} /> 

        <input style={styles.input} placeholder="Image URL (optional)" value={newImage} onChange={(e) => setNewImage(e.target.value)} /> 

        <input style={styles.input} placeholder="Total Episodes" type="number" value={newEpisodes} onChange={(e) => setNewEpisodes(e.target.value)} /> 

        <input style={styles.input} placeholder="Notes (optional)" value={newNotes} onChange={(e) => setNewNotes(e.target.value)} /> 

        <button style={styles.addButton} onClick={addShow}>Add Anime</button> 

      </div> 

      {/* Unwatched */} 

      <h2 style={styles.sectionTitle}>Unwatched</h2> 

      <div style={styles.grid}> 

        {unwatchedShows.map(show => <AnimeCard key={show.id} show={show} updateWatchedEpisodes={updateWatchedEpisodes} toggleSeen={toggleSeen} deleteShow={deleteShow} updateRating={updateRating} updateNotes={updateNotes} styles={styles} isWatched={false} />)} 

      </div> 

      {/* Watching */} 

      <h2 style={styles.sectionTitle}>Watching</h2> 

      <div style={styles.grid}> 

        {watchingShows.map(show => <AnimeCard key={show.id} show={show} updateWatchedEpisodes={updateWatchedEpisodes} toggleSeen={toggleSeen} deleteShow={deleteShow} updateRating={updateRating} updateNotes={updateNotes} styles={styles} isWatched={false} />)} 

      </div> 

      {/* Watched */} 

      <h2 style={styles.sectionTitle}>Watched</h2> 

      <div style={styles.grid}> 

        {watchedShows.map(show => <AnimeCard key={show.id} show={show} updateWatchedEpisodes={updateWatchedEpisodes} toggleSeen={toggleSeen} deleteShow={deleteShow} updateRating={updateRating} updateNotes={updateNotes} styles={styles} isWatched={true} />)} 

      </div> 

    </div> 

  ); 

} 

// Separate AnimeCard component 

function AnimeCard({ show, updateWatchedEpisodes, toggleSeen, deleteShow, updateRating, updateNotes, styles, isWatched }) { 

  return ( 

    <div style={styles.card}> 

      <img src={show.image} alt={show.title} style={styles.image} /> 

      <h3>{show.title}</h3> 

      <p style={styles.episodes}>{show.watchedEpisodes} / {show.totalEpisodes} episodes</p> 

      <div style={styles.progressBar}> 

        <div style={{ ...styles.progressFill, width: `${(show.watchedEpisodes/show.totalEpisodes)*100}%` }} /> 

      </div> 

      <div> 

        <button style={styles.progressButton} onClick={() => updateWatchedEpisodes(show.id, 1)}>+</button> 

        <button style={styles.progressButton} onClick={() => updateWatchedEpisodes(show.id, -1)}>-</button> 

        {!isWatched ? <button style={styles.unseenButton} onClick={() => toggleSeen(show.id)}>Mark as Watched</button> : 

          <button style={styles.deleteButton} onClick={() => deleteShow(show.id)}>Delete</button>} 

      </div> 

      <div style={{ marginTop: "10px" }}> 

        {[1,2,3,4,5].map(n => <button key={n} style={styles.starButton} onClick={() => updateRating(show.id, n)}>{n<=show.rating?"★":"☆"}</button>)} 

      </div> 

      <textarea style={styles.notesInput} placeholder="Add notes..." value={show.notes} onChange={(e)=>updateNotes(show.id,e.target.value)} /> 

    </div> 

  ); 

} 