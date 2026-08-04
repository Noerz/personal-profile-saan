"use client";

import { Heading, Text, Button, Badge } from "@/components/atoms";
import { Card, CardBody, CardHeader } from "@/components/molecules";
import { useSettingsStore } from "@/features/settings/store/settingsStore";
import type { Theme, Language } from "@/features/settings/types";

export default function AdminSettingsPage() {
  const { theme, language, notifications, setTheme, setLanguage, toggleNotifications, reset } =
    useSettingsStore();

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div>
        <Heading as="h1" variant="title">Settings</Heading>
        <Text variant="muted" className="mt-1">Manage your admin preferences.</Text>
      </div>

      <Card variant="glass" padding="md">
        <CardHeader>
          <Text variant="label">Appearance</Text>
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Text variant="body">Theme</Text>
            <div className="flex gap-2">
              {(["dark", "light", "system"] as Theme[]).map((t) => (
                <Button
                  key={t}
                  variant={theme === t ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setTheme(t)}
                  id={`theme-${t}`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>

      <Card variant="glass" padding="md">
        <CardHeader>
          <Text variant="label">Language</Text>
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Text variant="body">Display Language</Text>
            <div className="flex gap-2">
              {(["id", "en"] as Language[]).map((l) => (
                <Button
                  key={l}
                  variant={language === l ? "primary" : "ghost"}
                  size="sm"
                  onClick={() => setLanguage(l)}
                  id={`lang-${l}`}
                >
                  {l === "id" ? "Bahasa Indonesia" : "English"}
                </Button>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>

      <Card variant="glass" padding="md">
        <CardHeader>
          <Text variant="label">Notifications</Text>
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between">
            <Text variant="body">Email Notifications</Text>
            <button
              onClick={toggleNotifications}
              id="toggle-notifications"
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications ? "bg-indigo-600" : "bg-slate-600"
              }`}
              role="switch"
              aria-checked={notifications}
              aria-label="Toggle notifications"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${
                  notifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </CardBody>
      </Card>

      <div className="flex justify-end">
        <Button variant="danger" size="sm" onClick={reset} id="reset-settings-btn">
          Reset to Defaults
        </Button>
      </div>
    </div>
  );
}
