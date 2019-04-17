export default {
  projects: [
    {
      id: 1,
      name: "My first project",
      lists: [
        {
          id: 1,
          name: "todo",
          items: [
            {
              id: 1,
              name: "jump up and down"
            },
            {
              id: 2,
              name: "sleep"
            }
          ]
        },
        {
          id: 2,
          name: "in progress",
          items: {
            id: 1,
            name: "eat",
          }
        },
        {
          id: 3,
          name: "completed",
          items: {
            id: 1,
            name: "blah"
          }
        }
      ]
    }
  ]
}