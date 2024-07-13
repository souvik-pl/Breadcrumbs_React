export type Folder = {
  id: string;
  name: string;
  subFolderList: Folder[];
};

export type FolderWithoutSubFolders = Omit<Folder, "subFolderList">;
