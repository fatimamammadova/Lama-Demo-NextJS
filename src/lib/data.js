
const users = [
    {
        id: 1,
        name: "John" 
    },
    {
        id: 2,
        name: "Jane" 
    }
]

const posts = [
    {
        id: 1, 
        title: "Voluptate et itaque vero tempora molestiae", 
        body: "Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
        img: "https://images.unsplash.com/photo-1706706588488-7f1ed39abe18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userId: 1
    },
    {
        id: 2, 
        title: "Dolorem eum magni eos aperiam quia", 
        body: "Ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
        img: "https://images.unsplash.com/photo-1706535564563-d5613c74b78d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userId: 2
    },
    {
        id: 3, 
        title: "Nesciunt iure omnis dolorem tempora et accusantium", 
        body: "Consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
        img: "https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userId: 1
    },
    {
        id: 4, 
        title: "Et ea vero quia laudantium autem", 
        body: "Delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi",
        img: "https://images.unsplash.com/photo-1706550631672-15f4502b7527?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userId: 2
    },
    {
        id: 5, 
        title: "In quibusdam tempore odit est dolorem", 
        body: "Itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio",
        img: "https://images.unsplash.com/photo-1706963601706-e741fad34d09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userId: 1
    },
    {
        id: 6, 
        title: "Fugit voluptas sed molestias voluptatem provident", 
        body: "Eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam deserunt ratione qui eos qui nihil ratione nemo velit ut aut id quo",
        img: "https://images.unsplash.com/photo-1706931723296-128969930baa?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userId: 2
    }
]

export const getPosts = async (id) => {
    return posts
}

export const getUsers = async (id) => {
    return users
}

export const getPost = async (id) => {
    const post = posts.find((post) => post.id === parseInt(id))
    return post
}

export const getUser = async (id) => {
    const user = users.find((user) => user.id === parseInt(id))
    return user
}