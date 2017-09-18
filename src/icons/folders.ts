import { FolderIcon, FolderTypes } from "../models/index";

export const icons: FolderTypes = {
    default: { icon: 'folder.svg' },
    types: [
        { icon: 'src.svg', folderNames: ['src', 'source'] },
        { icon: 'dist.svg', folderNames: ['dist', 'build'] },
        { icon: 'aurelia.svg', folderNames: [''] }
    ],
};
