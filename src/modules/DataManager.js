const remoteURL = "http://localhost:8088"

export default Object.create(null, {
    get: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`)
                .then(result => result.json())
        }
    },

    getReview: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}?mangaId=${id}`)
                .then(result => result.json())
        }
    },

    getAll: {
        value: (resource) => {
            return fetch(`${remoteURL}/${resource}`)
                .then(result => result.json())
        }
    },

    delete: {
        value: (resource, id) => {
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "DELETE"
            }).then(result => result.json())
        }
    },

    add: {
        value: (resource, item) => {
            return fetch(`${remoteURL}/${resource}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
                .then(result => result.json())
        }
    },
    edit: {
        value: (resource, id, item) => {
            console.log(item, "item")
            return fetch(`${remoteURL}/${resource}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            })
            .then(result => result.json())
        }
    },
    getChapters: {
        value: (chapterId) => {
            return fetch(`https://www.mangaeden.com/api/chapter/${chapterId}`)
                .then(result => result.json())
        }
    }
})