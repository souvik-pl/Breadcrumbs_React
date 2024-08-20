import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { FOLDER_DATA } from "./common/folderData";
import { Breadcrumbs, Crumb } from "./Breadcrumbs";
import folderIcon from "./assets/folder-icon.svg";
import { Folder, FolderWithoutSubFolders } from "./common/common.type";

function App() {
  const [breadcrumbList, setBreadcrumbList] = useState<FolderWithoutSubFolders[]>([]);
  const [folderList, setFolderList] = useState<Folder[]>([]);

  useEffect(() => {
    openFolder(FOLDER_DATA.id);
  }, []);

  function openFolder(id: string) {
    const folder = traverseFolderTree(id, FOLDER_DATA);
    if (!folder) return;

    setFolderList(folder.subFolderList);
    updateBreadcrumb(folder);
  }

  function updateBreadcrumb(folder: Folder) {
    const index = breadcrumbList.findIndex((crumb) => crumb.id === folder.id);
    if (index === -1) {
      setBreadcrumbList([...breadcrumbList, { id: folder.id, name: folder.name }]);
    } else {
      setBreadcrumbList([...breadcrumbList.slice(0, index + 1)]);
    }
  }

  function traverseFolderTree(folderId: string, folderTree: Folder): Folder | undefined {
    if (folderId === folderTree.id) return folderTree;

    for (const folder of folderTree.subFolderList) {
      const foundFolder = traverseFolderTree(folderId, folder);
      if (foundFolder) return foundFolder;
    }

    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Breadcrumbs onSelect={openFolder}>
          {breadcrumbList.map((folder, index) => (
            <Crumb key={folder.id} label={folder.name} id={folder.id} index={index} />
          ))}
        </Breadcrumbs>
      </div>
      <div className={styles.folderContainer}>
        {folderList.map((folder) => (
          <div
            key={folder.id}
            className={styles.folder}
            onDoubleClick={() => openFolder(folder.id)}
          >
            <img src={folderIcon} />
            {folder.name}
          </div>
        ))}

        {folderList.length === 0 && <div className={styles.emptyFolder}>Folder is empty</div>}
      </div>
    </div>
  );
}

export default App;
