"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "",
  })

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
  })

  const [darkMode, setDarkMode] = useState(false)

  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    console.log({
      profile,
      notifications,
      darkMode,
    })

    alert("Settings saved!")
  }

  return (
    <div
      className={`min-h-screen transition ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Settings</h1>

          <p
            className={`mt-2 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Manage your account preferences and profile settings.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Sidebar */}
          <aside
            className={`rounded-3xl p-6 h-fit border ${
              darkMode
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"
            }`}
          >
            <nav className="space-y-2">
              {[
                "Profile",
                "Account",
                "Notifications",
                "Security",
                "Appearance",
              ].map((item) => (
                <button
                  key={item}
                  className={`w-full text-left px-4 py-3 rounded-xl transition font-medium ${
                    item === "Profile"
                      ? darkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-600 text-white"
                      : darkMode
                      ? "hover:bg-slate-800"
                      : "hover:bg-slate-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div
              className={`rounded-3xl p-6 border ${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Profile Information
              </h2>

              <div className="space-y-5">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold text-white">
                    J
                  </div>

                  <div>
                    <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                      Upload Photo
                    </button>

                    <p
                      className={`text-sm mt-2 ${
                        darkMode
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      JPG, PNG up to 2MB
                    </p>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    className={`w-full rounded-xl px-4 py-3 border outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode
                        ? "bg-slate-950 border-slate-700"
                        : "bg-white border-slate-300"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    className={`w-full rounded-xl px-4 py-3 border outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode
                        ? "bg-slate-950 border-slate-700"
                        : "bg-white border-slate-300"
                    }`}
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block mb-2 font-medium">
                    Bio
                  </label>

                  <textarea
                    name="bio"
                    rows={4}
                    value={profile.bio}
                    onChange={handleProfileChange}
                    placeholder="Tell us about yourself..."
                    className={`w-full rounded-xl px-4 py-3 border outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode
                        ? "bg-slate-950 border-slate-700"
                        : "bg-white border-slate-300"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div
              className={`rounded-3xl p-6 border ${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Notifications
              </h2>

              <div className="space-y-5">
                {[
                  {
                    key: "email",
                    label: "Email Notifications",
                  },
                  {
                    key: "push",
                    label: "Push Notifications",
                  },
                  {
                    key: "marketing",
                    label: "Marketing Emails",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-medium">{item.label}</h3>

                      <p
                        className={`text-sm ${
                          darkMode
                            ? "text-slate-400"
                            : "text-slate-500"
                        }`}
                      >
                        Receive updates and alerts.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setNotifications({
                          ...notifications,
                          [item.key]:
                            !notifications[
                              item.key as keyof typeof notifications
                            ],
                        })
                      }
                      className={`w-14 h-8 rounded-full transition flex items-center px-1 ${
                        notifications[
                          item.key as keyof typeof notifications
                        ]
                          ? "bg-blue-600 justify-end"
                          : darkMode
                          ? "bg-slate-700 justify-start"
                          : "bg-slate-300 justify-start"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Appearance */}
            <div
              className={`rounded-3xl p-6 border ${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-6">
                Appearance
              </h2>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>

                  <p
                    className={`text-sm ${
                      darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    Switch between light and dark theme.
                  </p>
                </div>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-14 h-8 rounded-full transition flex items-center px-1 ${
                    darkMode
                      ? "bg-blue-600 justify-end"
                      : "bg-slate-300 justify-start"
                  }`}
                >
                  <div className="w-6 h-6 rounded-full bg-white" />
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}