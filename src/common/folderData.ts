import { Folder } from "./common.type";

export const FOLDER_DATA: Folder = {
  id: "f1",
  name: "Root",
  subFolderList: [
    {
      id: "f11",
      name: "Personal",
      subFolderList: [
        {
          id: "f111",
          name: "Documents",
          subFolderList: [
            {
              id: "f1111",
              name: "Resumes",
              subFolderList: [
                {
                  id: "f11111",
                  name: "Jan 2024",
                  subFolderList: [],
                },
                {
                  id: "f11112",
                  name: "Feb 2024",
                  subFolderList: [],
                },
              ],
            },
            {
              id: "f1112",
              name: "Projects",
              subFolderList: [
                {
                  id: "f11121",
                  name: "Jan 2024",
                  subFolderList: [
                    {
                      id: "f111211",
                      name: "Prototype",
                      subFolderList: [],
                    },
                    {
                      id: "f111212",
                      name: "Final",
                      subFolderList: [],
                    },
                  ],
                },
                {
                  id: "f11122",
                  name: "Feb 2024",
                  subFolderList: [],
                },
              ],
            },
            {
              id: "f1113",
              name: "Notes",
              subFolderList: [],
            },
          ],
        },
        {
          id: "f112",
          name: "Pictures",
          subFolderList: [],
        },
        {
          id: "f113",
          name: "Music",
          subFolderList: [],
        },
      ],
    },
    {
      id: "f12",
      name: "Work",
      subFolderList: [],
    },
    {
      id: "f13",
      name: "Family",
      subFolderList: [],
    },
  ],
};
