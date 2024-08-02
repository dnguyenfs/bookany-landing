import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const getAlertDialogRoot = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialog;
  }
  return Drawer;
};

export const getAlertDialogTrigger = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialogTrigger;
  }
  return DrawerTrigger;
};

export const getAlertDialogContent = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialogContent;
  }
  return DrawerContent;
};

export const getAlertDialogHeader = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialogHeader;
  }
  return DrawerHeader;
};

export const getAlertDialogFooter = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialogFooter;
  }
  return DrawerFooter;
};

export const getAlertDialogTitle = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialogTitle;
  }
  return DrawerTitle;
};

export const getAlertDialogDescription = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialogDescription;
  }
  return DrawerDescription;
};

export const getAlertDialogAction = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialogAction;
  }
  return DrawerClose;
};

export const getAlertDialogCancel = (isDesktop: boolean) => {
  if (isDesktop) {
    return AlertDialogCancel;
  }
  return DrawerClose;
};
